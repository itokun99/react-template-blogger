import { memo } from 'react';
import { Container } from '@components';
import Brand from './components/Brand';
import Nav from './components/Nav';
import Search from './components/Search';

function Component() {
  return (
    <div className="c-header bg-white border border-b-slate-300 py-2 top-0 z-20 fixed w-full">
      <Container className="c-header-container px-6">
        <div className="flex justify-between">
          <div>
            <Brand />
          </div>
          <div className="flex gap-8">
            <Nav />
            <Search />
          </div>
        </div>
      </Container>
    </div>
  );
}

const Header = memo(Component);

export default Header;
