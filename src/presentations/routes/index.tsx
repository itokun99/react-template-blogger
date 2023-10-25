import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import { Root, Homepage } from '@pages';

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Homepage />} />
    </Route>
  )
);
