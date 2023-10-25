import { lazy } from 'react';

const Root = lazy(() => import('./Root'));
const Homepage = lazy(() => import('./Homepage'));

export { Root, Homepage };
