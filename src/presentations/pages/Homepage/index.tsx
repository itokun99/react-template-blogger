import { SimplePost } from '@components';
import { useConfig } from '@hooks';
import Top from './components/Top';

function Homepage() {
  const config = useConfig();
  const section = config.data?.sectionConfig?.homepage;
  const top = section?.top || [];
  const main = section?.main;

  return (
    <div>
      {top.map(v => (
        <Top
          key={v.id}
          title={v.title}
          type={v.type}
          show={v.show}
          label={v.label || ''}
        />
      ))}
      {main && main.show && <SimplePost title={main.title} />}
    </div>
  );
}

export default Homepage;
