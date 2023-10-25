import React from 'react';
import { FeaturedCard } from '../../cards';

function Component() {
  return (
    <div className="c-featured-post">
      <div className="c-featured-post-top">
        <FeaturedCard
          image="https://1.bp.blogspot.com/-Lq1oy8gWQSc/Xl-A2TpKjII/AAAAAAAAAXk/ZhzCs2bNLzYPqd84npi3BNif5wAkbf6igCLcBGAsYHQ/w485-h303-p-k-no-nu/Wild%2BSwimming%2BConscious%2BLiving%2BAdventures.png"
          title="The Good Landscape for Your Backyard and Home suitable"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas eget nulla a lobortis. Duis tincidunt in dolor ornare condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas eget nulla a lobortis. Duis tincidunt in dolor ornare condimentum."
        />
      </div>
    </div>
  );
}

const FeaturedPost = React.memo(Component);

export default FeaturedPost;
