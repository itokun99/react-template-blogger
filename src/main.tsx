import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { QueryClientProvider } from '@tanstack/react-query';
import { appRouter } from '@routes';
import { queryClient } from '@core';

const rootEl = document.getElementById('root');
const dataConfig = rootEl?.getAttribute('data-config');
const dataConfigUrl = rootEl?.getAttribute('data-config-url');

if (rootEl && dataConfig && dataConfigUrl) {
  const w = window as unknown as { __REACT_TEMPLATE_BLOGGER__: object };
  w['__REACT_TEMPLATE_BLOGGER__'] = {
    configId: dataConfig,
    configUrl: dataConfigUrl
  };

  ReactDOM.createRoot(rootEl!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <IconContext.Provider value={{ color: '#ddd', className: 'a-icon' }}>
          <RouterProvider router={appRouter} />
        </IconContext.Provider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
