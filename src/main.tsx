import './index.css';
import './core/assets/scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { IconContext } from 'react-icons';
// import { appRoutes } from '@routes';


import {
  createBrowserRouter
} from "react-router-dom";

import { Root } from '@pages';


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IconContext.Provider value={{ color: '#ddd', className: 'a-icon' }}>
      <RouterProvider router={appRouter} />
    </IconContext.Provider>
  </React.StrictMode>,
)

// import elements from './elements';

// // import * as serviceWorker from './serviceWorker';

// const registerComponent = [
//   { component: FeaturePost, element: elements.HOME_FEATURED_POST },
//   { component: PostContainer, element: elements.HOME_POST_CONTAINER },
//   { component: SidebarPopularPost, element: elements.SIDEBAR_POPULAR_POST },
//   { component: SinglePostContainer, element: elements.SINGLEPOST },
//   { component: FooterSocialIcon, element: elements.FOOTER_SOCIAL_ICON },
//   { component: GoogleSearchContainer, element: elements.SEARCH_CONTAINER }
// ];

// registerComponent.forEach(app => {
//   const Component: any = app.component;
//   const el = app.element;
//   if (el) {
//     ReactDOM.createRoot(el).render(
//       <IconContext.Provider value={{ color: '#ddd', className: 'a-icon' }}>
//         <Component />
//       </IconContext.Provider>,
//     )
//   }
// });