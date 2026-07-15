import React from 'react';
import { IconCrosshair } from '../icons';

export const FieldMark = () => (
  <div className="flex items-center justify-center gap-4 w-full py-8">
    <div className="h-px flex-1 max-w-[120px] bg-brand-accent/40" />
    <div className="text-brand-accent/60">
      <IconCrosshair />
    </div>
    <div className="h-px flex-1 max-w-[120px] bg-brand-accent/40" />
  </div>
);