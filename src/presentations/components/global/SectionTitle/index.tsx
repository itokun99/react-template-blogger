import React from 'react';

interface SectionTitleProps {
  title?: string;
}

function Component({ title }: SectionTitleProps) {
  return (
    <div className="mb-4 px-6 sm:px-0 relative">
      <h2 className="font-bold text-md border bg-white z-10 relative border-slate-300 inline-block py-1 px-3">
        {title}
      </h2>
      <div className="absolute border-b border-slate-300 right-0 w-full translate-y-1/2 top-1/2"></div>
    </div>
  );
}

const SectionTitle = React.memo(Component);

export default SectionTitle;
