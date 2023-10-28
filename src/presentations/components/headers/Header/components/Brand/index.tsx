import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@components';
import { useBlog } from '@hooks';

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
            className="mr-2 h-10 w-10 overflow-hidden rounded-full"
          />
          {isLoading ? (
            <div className="h-6 w-24 rounded-full bg-slate-300"></div>
          ) : (
            <h2 className="text-xl font-bold text-slate-700">{data?.name}</h2>
          )}
        </div>
      </Link>
    </div>
  );
}

const BrandMemo = React.memo(Brand);

export default BrandMemo;
