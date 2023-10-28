import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@components';

function Root() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
export default Root;
