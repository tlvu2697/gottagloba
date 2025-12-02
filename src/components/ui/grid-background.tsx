'use client';

import * as React from 'react';

import { useCssVar } from '@/lib/use-css-vars';
import { cn } from '@/lib/utils';

interface GridBackgroundProps {
  className?: string;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({
  className,
}) => {
  const gridBorder = useCssVar('--grid-border');
  const background = useCssVar('--background');

  return (
    <div
      className={cn(
        'absolute inset-0',
        // grid pattern
        '[background-size:64px_64px]',
        '[background-image:linear-gradient(to_right,var(--grid-border,rgba(0,0,0,0.05))_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-border,rgba(0,0,0,0.05))_1px,transparent_1px)]',
        // dark mode variant handled automatically
        'transition-colors duration-500',
        className,
      )}
      style={
        {
          '--grid-border': gridBorder || '#e4e4e7',
          '--background': background || '#ffffff',
        } as React.CSSProperties
      }
    >
      {/* subtle fade mask */}
      <div className="pointer-events-none absolute inset-0 bg-[var(--background)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
};
