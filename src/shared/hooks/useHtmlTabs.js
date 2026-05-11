import { useEffect } from 'react';

export default function useHtmlTabs({
  rootRef,
  controlsSelector,
  panelsSelector,
  panelPrefix,
  activeClass,
  panelAttr = 'data-panel',
  syncOnlyClass,
}) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const panels = Array.from(root.querySelectorAll(panelsSelector));
    const controls = Array.from(root.querySelectorAll(controlsSelector));

    function activate(panelId, sourceControl) {
      panels.forEach((panel) => panel.classList.toggle(activeClass, panel.id === `${panelPrefix}${panelId}`));

      controls.forEach((control) => {
        if (syncOnlyClass && !control.classList.contains(syncOnlyClass)) return;
        control.classList.toggle(activeClass, control.getAttribute(panelAttr) === panelId);
      });

      if (sourceControl && (!syncOnlyClass || !sourceControl.classList.contains(syncOnlyClass))) {
        sourceControl.classList.add(activeClass);
      }
    }

    const listeners = controls.map((control) => {
      const panelId = control.getAttribute(panelAttr);
      if (!panelId) return null;

      const handler = () => activate(panelId, control);
      control.addEventListener('click', handler);
      return { control, handler };
    });

    return () => {
      listeners.forEach((entry) => {
        if (!entry) return;
        entry.control.removeEventListener('click', entry.handler);
      });
    };
  }, [activeClass, controlsSelector, panelAttr, panelPrefix, panelsSelector, rootRef, syncOnlyClass]);
}
