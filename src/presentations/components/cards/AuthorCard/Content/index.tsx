import React from 'react';

interface ContentProps {
  title?: string;
  subtitle?: string;
  loading?: boolean;
}

function Component({ title, subtitle, loading }: ContentProps) {
  if (loading) {
    return (
      <div className="flex flex-col justify-center">
        <div className="mb-1 h-4 w-[100px] rounded-full bg-slate-300"></div>
        <div className="h-3 w-[80px] rounded-full bg-slate-300"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center">
      <h4 className="text-sm font-bold text-slate-700">{title}</h4>
      {subtitle && <p className="text-xs">{subtitle}</p>}
    </div>
  );
}

const Content = React.memo(Component);

export default Content;
