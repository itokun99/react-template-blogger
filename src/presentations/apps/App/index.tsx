import '@src/index.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { QueryClientProvider } from '@tanstack/react-query';
import { appRouter } from '@routes';
import { queryClient } from '@core';

function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <IconContext.Provider value={{ color: '#ddd', className: 'a-icon' }}>
          <RouterProvider router={appRouter} />
        </IconContext.Provider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
