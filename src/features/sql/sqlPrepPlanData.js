/** TCS NQT SQL 4-week plan — keys `d1`…`d28` match localStorage `tcs_sql_plan_v1`. */
export const SQL_PREP_PLAN = [
  {
    week: 1,
    label: 'Week 1',
    title: 'Foundations',
    badge: 'w1',
    goal: 'Get comfortable with how databases and basic queries work',
    days: [
      { day: 1, topic: 'DBMS basics, types of DB, keys', task: 'Read concepts + make short notes' },
      { day: 2, topic: 'DDL — CREATE, ALTER, DROP', task: 'Write 5 queries yourself' },
      { day: 3, topic: 'DML — INSERT, UPDATE, DELETE', task: 'Write 5 queries yourself' },
      { day: 4, topic: 'SELECT, WHERE, AND, OR, NOT', task: 'Solve 5 HackerRank easy problems' },
      { day: 5, topic: 'ORDER BY, LIMIT, DISTINCT', task: 'Solve 5 HackerRank easy problems' },
      { day: 6, topic: 'Aggregate functions — COUNT, SUM, AVG, MAX, MIN', task: 'Solve 5 problems' },
      { day: 7, topic: 'Revision day', task: 'Revise week 1 + redo any weak queries' },
    ],
  },
  {
    week: 2,
    label: 'Week 2',
    title: 'Intermediate queries',
    badge: 'w2',
    goal: 'The most interview-heavy topics',
    days: [
      { day: 8, topic: 'GROUP BY + HAVING', task: 'Solve 5 problems' },
      { day: 9, topic: 'JOINs — INNER, LEFT, RIGHT', task: 'Solve 5 problems' },
      { day: 10, topic: 'JOINs — FULL, SELF, CROSS', task: 'Solve 5 problems' },
      { day: 11, topic: 'Subqueries — basic', task: 'Solve 5 problems' },
      { day: 12, topic: 'Subqueries — correlated', task: 'Solve 5 problems' },
      { day: 13, topic: 'String functions + Date functions', task: 'Solve 5 problems' },
      { day: 14, topic: 'Revision day', task: 'Focus on JOINs and subqueries — redo weak ones' },
    ],
  },
  {
    week: 3,
    label: 'Week 3',
    title: 'DBMS concepts + advanced SQL',
    badge: 'w3',
    goal: 'Be able to answer theory questions confidently',
    days: [
      { day: 15, topic: 'Normalization — 1NF, 2NF, 3NF', task: 'Notes + examples with your own table' },
      { day: 16, topic: 'BCNF + Denormalization', task: 'Notes' },
      { day: 17, topic: 'ACID properties + Transactions', task: 'Notes + understand with real example' },
      { day: 18, topic: 'Indexes — what, why, when', task: 'Notes' },
      { day: 19, topic: 'Views + Stored Procedures + Triggers', task: 'Notes + 1 example each' },
      { day: 20, topic: 'Window functions — RANK, DENSE_RANK, ROW_NUMBER', task: 'Solve 5 problems' },
      { day: 21, topic: 'Revision day', task: 'All DBMS concepts — quiz yourself verbally' },
    ],
  },
  {
    week: 4,
    label: 'Week 4',
    title: 'Interview practice',
    badge: 'w4',
    goal: 'Feel interview-ready',
    days: [
      { day: 22, topic: '2nd highest salary — 3 methods', task: 'Write all 3 yourself' },
      { day: 23, topic: 'Find duplicates + Delete duplicates', task: 'Practice both approaches' },
      { day: 24, topic: 'Employees earning more than their manager', task: 'Practice' },
      { day: 25, topic: 'Department-wise max salary', task: 'Practice' },
      { day: 26, topic: 'Mixed practice — 10 medium problems', task: 'HackerRank SQL, timed practice' },
      { day: 27, topic: 'Mock interview day', task: 'Answer questions out loud — explain your queries verbally' },
      { day: 28, topic: 'Full revision', task: 'Weak topics only — target your gaps' },
    ],
  },
];

export const SQL_PLAN_TOTAL_DAYS = SQL_PREP_PLAN.reduce((n, w) => n + w.days.length, 0);

export function dayStorageKey(dayNum) {
  return `d${dayNum}`;
}
