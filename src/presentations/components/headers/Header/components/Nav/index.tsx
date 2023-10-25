import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useBlog } from '@hooks';

function Component() {
  const { config } = useBlog();
  const menus = useMemo(
    () => config.data?.menu?.header || [],
    [config.data?.menu?.header]
  );
  return (
    <ul className="c-header-nav flex gap-8">
      {menus.map(menu => (
        <li key={`nav-${menu.id}`} className="flex items-center">
          <NavLink className="text-slate-700" to={menu.url} title={menu.title}>
            {menu.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

const Nav = React.memo(Component);

export default Nav;
