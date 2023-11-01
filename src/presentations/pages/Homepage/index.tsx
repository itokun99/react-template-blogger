import { SimplePost, Container, SimpleLabelList } from '@components';
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
      <Container>
        <div className="relative flex">
          <div className="basis-8/12">
            {main && main.show && <SimplePost title={main.title} />}
          </div>
          <div className="relative basis-4/12">
            <div className="sticky top-20">
              <SimpleLabelList title="All Tags" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Homepage;
