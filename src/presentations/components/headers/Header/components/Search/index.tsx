import React from 'react';
import { FiSearch } from 'react-icons/fi';

function Component() {
  return (
    <div className="c-header-search flex items-center">
      <button
        type="button"
        className="w-6 h-6 flex justify-center items-center"
      >
        <FiSearch className="text-lg !text-slate-600" />
      </button>
    </div>
  );
}

const Search = React.memo(Component);

export default Search;
