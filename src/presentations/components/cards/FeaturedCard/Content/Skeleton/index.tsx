import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { AuthorCard, Hashtag } from '@components';

function Component() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="pt-0 md:pt-2">
        {/* {[1, 2, 3].map(v => (
          <div
            key={v}
            className="bg-slate-300 inline-block w-14 h-3 mr-2 mb-2 rounded-full"
          />
        ))} */}
        {[1, 2, 3].map(v => (
          <Hashtag key={v} loading />
        ))}
      </div>
      {/* title */}
      <div className="pb-4">
        <div className="bg-slate-300 rounded-full w-[80%] h-5 mb-2"></div>
        <div className="bg-slate-300 rounded-full w-[60%] h-5"></div>
      </div>

      {/* Date */}
      <div className="pb-4">
        <div className="bg-slate-300 w-[40%] h-3 rounded-full"></div>
      </div>

      {/* Description */}
      <div className="flex-1 pb-6">
        {/* <p className="text-sm text-slate-700">{description}</p> */}
        <div className="bg-slate-300 mb-2 w-[85%] h-4 rounded-full"></div>
        <div className="bg-slate-300 mb-2 w-[90%] h-4 rounded-full"></div>
        <div className="bg-slate-300 mb-2 w-[80%] h-4 rounded-full"></div>
      </div>

      {/* Footer */}
      <div className="flex justify-between flex-wrap sm:flex-nowrap">
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <AuthorCard loading />
        </div>
        <div className="bg-slate-300 w-[150px] rounded-full h-8"></div>
        {/* <Button
          url={url}
          iconAlign="end"
          icon={<FiArrowRight className="text-lg !text-white" />}
        >
          Read More
        </Button> */}
      </div>
    </div>
  );
}

const Skeleton = React.memo(Component);

export default Skeleton;
