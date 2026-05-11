import { useMemo, useRef } from 'react';
import html from '../../../static/Exam-Job_Full_Journey.html?raw';
import useHtmlTabs from '../../../shared/hooks/useHtmlTabs.js';

function sanitizeHtml(input) {
  return input
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/onclick="show\('([^']+)'\)"/g, 'data-panel="$1"');
}

export default function ExamJobJourneyPage() {
  const containerRef = useRef(null);
  const content = useMemo(() => sanitizeHtml(html), []);

  useHtmlTabs({
    rootRef: containerRef,
    controlsSelector: '.nb',
    panelsSelector: '.pn',
    panelPrefix: 'pn-',
    activeClass: 'on',
  });

  return (
    <main className="app-shell">
      <section className="guide" aria-label="Exam to job journey guide">
        <div ref={containerRef} dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    </main>
  );
}
