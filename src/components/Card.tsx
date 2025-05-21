import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'bordered' | 'elevated';
}

export const Card: React.FC<CardProps> = ({
  className = '',
  children,
  padding = 'md',
  variant = 'default',
}) => {
  const baseStyles = 'rounded-lg overflow-hidden';
  
  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7',
  };

  const variants = {
    default: 'bg-white',
    bordered: 'bg-white border border-neutral-200',
    elevated: 'bg-white shadow-md',
  };

  return (
    <div className={twMerge(baseStyles, variants[variant], paddings[padding], className)}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = '', children }) => {
  return (
    <div className={twMerge('mb-4', className)}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = '', children }) => {
  return (
    <h3 className={twMerge('text-lg font-semibold text-neutral-900', className)}>
      {children}
    </h3>
  );
};

export const CardContent: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = '', children }) => {
  return <div className={className}>{children}</div>;
};

export const CardFooter: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = '', children }) => {
  return (
    <div className={twMerge('mt-4 pt-4 border-t border-neutral-200', className)}>
      {children}
    </div>
  );
};