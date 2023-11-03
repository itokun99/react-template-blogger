import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

function Component() {
  return (
    <div className="c-header-search flex items-center">
      <Link to="/search" className="flex h-6 w-6 items-center justify-center">
        <FiSearch className="text-lg !text-slate-600" />
      </Link>
    </div>
  );
}

const Search = React.memo(Component);

export default Search;
