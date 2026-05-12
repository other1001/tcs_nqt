import { useCallback, useState } from 'react';
import useSqlPlanProgress from '../hooks/useSqlPlanProgress.js';
import { SQL_PREP_PLAN, dayStorageKey } from '../sqlPrepPlanData.js';

function IconExternalLink() {
  return (
    <svg className="sql-prep-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconBulb() {
  return (
    <svg className="sql-prep-tip-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26A7 7 0 0 0 12 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconChevron() {
  return (
    <svg className="sql-prep-week-chevron-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SqlPrepPlanPage() {
  const { checked, toggleDay, doneCount, totalDays, pct } = useSqlPlanProgress();
  const [openWeeks, setOpenWeeks] = useState(() =>
    Object.fromEntries(SQL_PREP_PLAN.map((w) => [w.week, true])),
  );

  const toggleWeek = useCallback((weekNum) => {
    setOpenWeeks((prev) => ({ ...prev, [weekNum]: !prev[weekNum] }));
  }, []);

  return (
    <main className="app-shell">
      <section className="guide sql-prep-guide" aria-label="TCS NQT SQL 4-week study plan tracker">
        <h2 className="sr-only">TCS NQT SQL 4-week study plan tracker</h2>

        <div className="sql-prep-wrap">
          <div className="sql-prep-hero">
            <p className="sql-prep-hero-title">TCS NQT — SQL prep plan</p>
            <p className="sql-prep-hero-sub">4 weeks · 1 hour/day · Check off each day as you go</p>
            <div className="sql-prep-progress-bar-bg" aria-hidden>
              <div className="sql-prep-progress-bar-fill" style={{ width: `${pct}%` }} />
            </div>
            <div className="sql-prep-progress-label">
              <span>
                {doneCount} of {totalDays} days done
              </span>
              <span>{pct}%</span>
            </div>
          </div>

          <div className="sql-prep-stats-row">
            <div className="sql-prep-stat-card">
              <p className="sql-prep-stat-label">Total days</p>
              <p className="sql-prep-stat-value">
                {totalDays} <span className="sql-prep-stat-unit">days</span>
              </p>
            </div>
            <div className="sql-prep-stat-card">
              <p className="sql-prep-stat-label">Daily time</p>
              <p className="sql-prep-stat-value">
                1 <span className="sql-prep-stat-unit">hour</span>
              </p>
            </div>
            <div className="sql-prep-stat-card">
              <p className="sql-prep-stat-label">Completed</p>
              <p className="sql-prep-stat-value">
                {doneCount} <span className="sql-prep-stat-unit">days</span>
              </p>
            </div>
          </div>

          <div className="sql-prep-weeks">
            {SQL_PREP_PLAN.map((wk) => {
              const isOpen = openWeeks[wk.week];
              const weekDone = wk.days.filter((d) => checked[dayStorageKey(d.day)]).length;
              return (
                <div key={wk.week} className={`sql-prep-week-card sql-prep-${wk.badge}`}>
                  <button type="button" className="sql-prep-week-header" onClick={() => toggleWeek(wk.week)} aria-expanded={isOpen}>
                    <span className="sql-prep-week-badge">{wk.label}</span>
                    <span className="sql-prep-week-title">{wk.title}</span>
                    <span className="sql-prep-week-meta">
                      {weekDone}/{wk.days.length}
                    </span>
                    <span className={`sql-prep-week-chevron ${isOpen ? 'sql-prep-week-chevron-open' : ''}`}>
                      <IconChevron />
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="sql-prep-week-body">
                      {wk.days.map((d) => {
                        const key = dayStorageKey(d.day);
                        const isDone = Boolean(checked[key]);
                        return (
                          <button
                            key={d.day}
                            type="button"
                            className={`sql-prep-day-row ${isDone ? 'sql-prep-day-row-done' : ''}`}
                            onClick={() => toggleDay(key)}
                          >
                            <span className={`sql-prep-checkbox ${isDone ? 'sql-prep-checkbox-checked' : ''}`} aria-hidden />
                            <span className="sql-prep-day-content">
                              <span className="sql-prep-day-label">Day {d.day}</span>
                              <span className="sql-prep-day-topic">{d.topic}</span>
                              <span className="sql-prep-day-task">{d.task}</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="sql-prep-tip-box">
            <IconBulb />
            <p>
              After week 4, spend your remaining time doing 5 HackerRank SQL problems every 3 days. Consistency beats cramming every time.
            </p>
          </div>

          <div className="sql-prep-resources">
            <p className="sql-prep-resources-label">Resources</p>
            <div className="sql-prep-resource-chips">
              <a className="sql-prep-resource-chip" href="https://www.hackerrank.com/domains/sql" target="_blank" rel="noopener noreferrer">
                <IconExternalLink />
                HackerRank SQL
              </a>
              <a className="sql-prep-resource-chip" href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer">
                <IconExternalLink />
                W3Schools SQL
              </a>
              <a className="sql-prep-resource-chip" href="https://www.interviewbit.com/sql-interview-questions/" target="_blank" rel="noopener noreferrer">
                <IconExternalLink />
                InterviewBit SQL
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
