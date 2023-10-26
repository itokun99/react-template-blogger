import { Outlet } from 'react-router-dom';
import { Header, Container } from '@components';
import { useBlog } from '@hooks';

function Root() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <Outlet />
      </div>
    </>
  );
}
export default Root;
