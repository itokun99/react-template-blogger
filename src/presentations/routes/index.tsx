import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import { Root, Homepage, BloggerPost, SearchPage } from '@pages';

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/:year/:month/:title" element={<BloggerPost />} />
      <Route
        path="/"
        element={<Homepage />}
        errorElement={<div>Test Error</div>}
      />
    </Route>
  )
);
