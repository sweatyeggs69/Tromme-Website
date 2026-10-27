import React, { useEffect, useState } from 'react';
import Layout, { DocHeader } from '../components/Layout.jsx';
import { services, HISTORY_URL } from '../statusServices.js';

const TIMEOUT_MS = 8000;
const DAYS = 30;
const FRESH_MS = 40 * 60 * 1000;

const COLORS = { up: '#2f9e44', degraded: '#e8a317', down: '#d64545', unknown: 'rgba(0,0,0,0.1)' };
const LABELS = { up: 'Operational', degraded: 'Degraded', down: 'Down', unknown: 'Checking' };

// Browser check. The proxy sends no CORS headers, so the response is hidden:
// this only proves the host answered, never what it answered.
async function liveCheck(service) {
  try {
    await fetch(service.url(Date.now().toString(36)), {
      mode: 'no-cors',
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: 'no-store',
    });
    return 'up';
  } catch {
    return 'down';
  }
}

// The scheduled check reads real status codes, so it wins while it is recent.
function currentState(entry, live) {
  const last = entry && entry.recent && entry.recent[entry.recent.length - 1];
  if (last && Date.now() - new Date(last[0]).getTime() < FRESH_MS) {
    return live === 'down' ? 'down' : last[1];
  }
  return live || 'unknown';
}

function dayList() {
  const out = [];
  for (let i = DAYS - 1; i >= 0; i--) {
    out.push(new Date(Date.now() - i * 86400000).toISOString().slice(0, 10));
  }
  return out;
}

function dayState(counts) {
  if (!counts || !counts[2]) return 'unknown';
  const [up, degraded, total] = counts;
  if (up === total) return 'up';
  return up + degraded === 0 || up / total < 0.5 ? 'down' : 'degraded';
}

function uptime(entry) {
  if (!entry) return null;
  let up = 0;
  let total = 0;
  for (const [u, d, t] of Object.values(entry.days)) {
    up += u + d;
    total += t;
  }
  return total ? (up / total) * 100 : null;
}

function overall(states) {
  if (states.some((s) => s === 'down')) return 'down';
  if (states.some((s) => s === 'degraded')) return 'degraded';
  if (states.every((s) => s === 'up')) return 'up';
  return 'unknown';
}

const HEADLINES = {
  up: 'All services are operational',
  degraded: 'Some services are degraded',
  down: 'Some services are down',
  unknown: 'Checking services',
};

export default function Status() {
  const [live, setLive] = useState({});
  const [history, setHistory] = useState(null);

  useEffect(() => {
    let cancelled = false;
    services.forEach((s) => {
      liveCheck(s).then((state) => {
        if (!cancelled) setLive((prev) => ({ ...prev, [s.id]: state }));
      });
    });
    fetch(HISTORY_URL, { cache: 'no-cache' })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => !cancelled && setHistory(data))
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const days = dayList();
  const stateOf = (s) => currentState(history && history.services && history.services[s.id], live[s.id]);
  const states = services.map(stateOf);
  const summary = overall(states);

  return (
    <Layout>
      <DocHeader title="Status" intro="Live checks of the services Tromme relies on." />
      <section className="px-5 pb-24">
        <div className="max-w-[720px] mx-auto">
          <div
            className="rounded-[16px] p-5 mb-6 flex items-center gap-3"
            style={{ background: '#fff', border: '1px solid var(--line)' }}
            role="status"
          >
            <Dot state={summary} />
            <p className="text-[19px]" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>
              {HEADLINES[summary]}
            </p>
          </div>

          <div className="space-y-4">
            {services.map((s) => {
              const entry = history && history.services && history.services[s.id];
              const pct = uptime(entry);
              const state = stateOf(s);
              return (
                <div
                  key={s.id}
                  className="rounded-[16px] p-5"
                  style={{ background: '#fff', border: '1px solid var(--line)' }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-[17px]" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>
                        {s.name}
                      </h2>
                      <p className="text-[14px] mt-0.5" style={{ color: 'var(--ink-soft)' }}>
                        {s.detail}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[14px] font-medium shrink-0">
                      <Dot state={state} />
                      {LABELS[state]}
                    </div>
                  </div>

                  <div
                    className="mt-4 flex gap-[2px]"
                    role="img"
                    aria-label={pct === null ? 'No history yet' : `${pct.toFixed(2)} percent uptime over the last 30 days`}
                  >
                    {days.map((d) => (
                      <span
                        key={d}
                        title={`${d}: ${LABELS[dayState(entry && entry.days[d])]}`}
                        style={{
                          flex: 1,
                          height: 28,
                          borderRadius: 2,
                          background: COLORS[dayState(entry && entry.days[d])],
                        }}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-[12px]" style={{ color: 'var(--ink-soft)' }}>
                    <span>30 days ago</span>
                    <span>{pct === null ? 'No history yet' : `${pct.toFixed(2)}% uptime`}</span>
                    <span>Today</span>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-[13px]" style={{ color: 'var(--ink-soft)', lineHeight: 1.6 }}>
            Services are checked the way the app reaches them, through the Tromme API.
            {history && history.updated
              ? ` History is recorded every 15 minutes, last at ${new Date(history.updated).toLocaleString()}.`
              : ' History is recorded every 15 minutes.'}
          </p>
        </div>
      </section>
    </Layout>
  );
}

function Dot({ state }) {
  return (
    <span
      aria-hidden="true"
      style={{ width: 10, height: 10, borderRadius: 9999, background: COLORS[state], display: 'inline-block' }}
    />
  );
}
