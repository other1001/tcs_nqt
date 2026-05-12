import { useMemo, useRef } from 'react';
import html from '../../../static/CS_Fundamental_Interview.html?raw';
import useHtmlTabs from '../../../shared/hooks/useHtmlTabs.js';

function sanitizeHtml(input) {
  return input
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/onclick="showPanel\('([^']+)'\)"/g, 'data-panel="$1"');
}

export default function CSFundamentalsPage() {
  const containerRef = useRef(null);
  const content = useMemo(() => sanitizeHtml(html), []);

  useHtmlTabs({
    rootRef: containerRef,
    controlsSelector: '[data-panel]',
    panelsSelector: '.panel',
    panelPrefix: 'panel-',
    activeClass: 'active',
    syncOnlyClass: 'tab',
  });

  return (
    <main className="app-shell">
      <section className="guide" aria-label="CS fundamentals guide">
        <p className="eyebrow">CS Technical Interview</p>
        <h1 style={{ marginBottom: 16 }}>CS Fundamentals</h1>
        <div ref={containerRef} className="html-sandbox" dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    </main>
  );
}
