import { useState } from 'react';
import AptitudeRoadmapPage from '../features/aptitude/pages/AptitudeRoadmapPage.jsx';
import CSFundamentalsPage from '../features/cs/pages/CSFundamentalsPage.jsx';
import ExamJobJourneyPage from '../features/journey/pages/ExamJobJourneyPage.jsx';
import NQTExamSpecificPage from '../features/nqt/pages/NQTExamSpecificPage.jsx';
import SqlPrepPlanPage from '../features/sql/pages/SqlPrepPlanPage.jsx';
import Navbar from '../shared/components/Navbar.jsx';
import useTheme from '../shared/hooks/useTheme.js';

const PAGE_COMPONENTS = {
  journey: ExamJobJourneyPage,
  nqt: NQTExamSpecificPage,
  cs: CSFundamentalsPage,
  sql: SqlPrepPlanPage,
  aptitude: AptitudeRoadmapPage,
};

export default function App() {
  const [activePage, setActivePage] = useState('journey');
  const { theme, toggleTheme } = useTheme();
  const ActivePage = PAGE_COMPONENTS[activePage];

  return (
    <div className="app-root">
      <Navbar activePage={activePage} onChange={setActivePage} theme={theme} onToggleTheme={toggleTheme} />
      <ActivePage />
    </div>
  );
}
