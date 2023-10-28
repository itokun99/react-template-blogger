import { FeaturedPost, LabeledPost, SimplePost } from '@components';

function Homepage() {
  return (
    <div>
      <FeaturedPost />
      <LabeledPost
        title="React & Javascript"
        label={['React JS', 'Javascript']}
      />
      <SimplePost />
    </div>
  );
}

export default Homepage;
