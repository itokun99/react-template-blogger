import { Outlet } from 'react-router-dom';
import { Header, Container } from '@components';
import { useBlog } from '@hooks';

function Root() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
}
export default Root;
