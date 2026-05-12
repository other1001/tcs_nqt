import { useCallback, useEffect, useMemo, useState } from 'react';
import { SQL_PLAN_TOTAL_DAYS } from '../sqlPrepPlanData.js';

export const SQL_PLAN_STORAGE_KEY = 'tcs_sql_plan_v1';

function readChecked() {
  try {
    const raw = localStorage.getItem(SQL_PLAN_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

export default function useSqlPlanProgress() {
  const [checked, setChecked] = useState(readChecked);

  useEffect(() => {
    try {
      localStorage.setItem(SQL_PLAN_STORAGE_KEY, JSON.stringify(checked));
    } catch {
      /* ignore quota / private mode */
    }
  }, [checked]);

  const doneCount = useMemo(() => Object.values(checked).filter(Boolean).length, [checked]);
  const pct = useMemo(() => Math.round((doneCount / SQL_PLAN_TOTAL_DAYS) * 100), [doneCount]);

  const toggleDay = useCallback((key) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  return { checked, toggleDay, doneCount, totalDays: SQL_PLAN_TOTAL_DAYS, pct };
}
