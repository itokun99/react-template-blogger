import { FeaturedPost, LabeledPost } from '@components';

function Homepage() {
  return (
    <div>
      <FeaturedPost />
      <LabeledPost title="Javascript" label="Javascript" />
    </div>
  );
}

export default Homepage;
