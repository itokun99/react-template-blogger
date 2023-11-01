import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import { Root, Homepage, BloggerPost } from '@pages';

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/:year/:month/:title" element={<BloggerPost />} />
      <Route path="/" element={<Homepage />} />
    </Route>
  )
);
