import React from 'react';

interface BaseEditorProps {
  defaultContent?: string;
  placeholder?: string;
}

function Component({
  defaultContent,
  placeholder = 'Write Something ...'
}: BaseEditorProps) {
  return (
    <div className="c-base-editor">
      <div className="c-base-editor-header"></div>
      <div className="c-base-editor-body">
      </div>
      <div className="c-base-editor-footer"></div>
    </div>
  );
}

export const BaseEditor = React.memo(Component);
