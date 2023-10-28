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
        <div className="bg-slate-300 h-4 mb-1 w-[100px] rounded-full"></div>
        <div className="bg-slate-300 h-3 w-[80px] rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center">
      <h4 className="font-bold text-sm text-slate-700">{title}</h4>
      {subtitle && <p className="text-xs">{subtitle}</p>}
    </div>
  );
}

const Content = React.memo(Component);

export default Content;
