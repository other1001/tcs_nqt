import { useMemo, useRef } from 'react';
import html from '../../../static/NQT_Exam_Specific.html?raw';
import useHtmlTabs from '../../../shared/hooks/useHtmlTabs.js';

function sanitizeHtml(input) {
  return input
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/onclick="showPanel\('([^']+)'\)"/g, 'data-panel="$1"');
}

export default function NQTExamSpecificPage() {
  const containerRef = useRef(null);
  const content = useMemo(() => sanitizeHtml(html), []);

  useHtmlTabs({
    rootRef: containerRef,
    controlsSelector: '.tab',
    panelsSelector: '.panel',
    panelPrefix: 'panel-',
    activeClass: 'active',
  });

  return (
    <main className="app-shell">
      <section className="guide" aria-label="NQT exam specific guide">
        <div ref={containerRef} dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    </main>
  );
}
