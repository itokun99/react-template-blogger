import React from 'react';

interface ContentProps {
  title?: string;
  subtitle?: string;
}

function Component({ title, subtitle }: ContentProps) {
  return (
    <div className="">
      <h4 className="font-bold text-sm text-slate-700">{title}</h4>
      <p className="text-xs">{subtitle}</p>
    </div>
  );
}

const Content = React.memo(Component);

export default Content;
