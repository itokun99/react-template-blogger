import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header, Footer } from '@components';

function Root() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
export default Root;
