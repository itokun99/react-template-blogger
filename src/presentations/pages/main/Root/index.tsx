import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Footer } from '@components';
import { SiteHeader } from '@containers';
import { BaseLayout } from '@layouts';

function Root() {
  return (
    <BaseLayout
      header={<SiteHeader />}
      footer={
        <>
          <Footer />
          <ScrollRestoration />
        </>
      }
    >
      <Outlet />
    </BaseLayout>
  );
}
export default Root;
