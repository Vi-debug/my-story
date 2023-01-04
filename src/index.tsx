import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Am from './screens/am/am';
import About from './screens/about/about';
import Email from './screens/email/email';
import { FontSizeProvider } from './global-hook/context/font-size';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Am/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "email",
        element: <Email/>
      },
    ]
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FontSizeProvider>
        <RouterProvider router={router} />
      </FontSizeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
