import { SimplePost, Container, SimpleLabelList, Button } from '@components';
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
        <div className="relative flex flex-wrap">
          <div className="md:w-8/12">
            {main && main.show && (
              <>
                <SimplePost title={main.title} />
                <div className="px-6 pb-6">
                  <Button
                    url="/search"
                    className="inline-block w-full text-center"
                  >
                    See More Content
                  </Button>
                </div>
              </>
            )}
          </div>
          <div className="relative md:w-4/12">
            <div className="mb-6 sm:px-0 md:sticky md:top-20">
              <SimpleLabelList title="All Tags" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Homepage;
