import React from 'react';
import { cn } from '@/lib/utils';

export const Card = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <div className={cn('bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden', className)}>
    {children}
  </div>
);

export const CardHeader = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <div className={cn('p-6 border-b border-gray-50 dark:border-zinc-800', className)}>
    {children}
  </div>
);

export const CardContent = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <div className={cn('p-6', className)}>
    {children}
  </div>
);

export const CardFooter = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <div className={cn('p-6 bg-gray-50/50 dark:bg-zinc-800/50 border-t border-gray-50 dark:border-zinc-800', className)}>
    {children}
  </div>
);