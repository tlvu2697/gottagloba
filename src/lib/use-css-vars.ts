import { useEffect, useState } from 'react';

export function useCssVar(varName: string, el?: HTMLElement | null) {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    const target = el ?? document.documentElement;
    if (!target) return;

    const compute = () => {
      const v = getComputedStyle(target).getPropertyValue(varName).trim();
      setValue(v);
    };

    compute();
    const onResize = () => compute();
    window.addEventListener('resize', onResize, { passive: true });

    const mo = new MutationObserver(() => compute());
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const onMql = () => compute();
    mql.addEventListener?.('change', onMql);

    return () => {
      window.removeEventListener('resize', onResize);
      mo.disconnect();
      mql.removeEventListener?.('change', onMql);
    };
  }, [varName, el]);

  return value;
}
