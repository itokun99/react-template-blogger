import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@components';
import { useConfigStore, useBlog } from '@hooks';

function Brand() {
  const { isLoading, data, config } = useBlog();

  return (
    <div className="c-header-brand">
      <Link to="/">
        <div className="flex items-center">
          <Image
            loading={isLoading}
            src={config.data?.app?.logo}
            alt={data?.name}
            className="rounded-full w-10 mr-4 h-10 overflow-hidden"
          />
          {isLoading ? (
            <div className="bg-slate-300 w-24 h-6 rounded-full"></div>
          ) : (
            <h2 className="font-bold text-xl text-slate-700">{data?.name}</h2>
          )}
        </div>
      </Link>
    </div>
  );
}

const BrandMemo = React.memo(Brand);

export default BrandMemo;
