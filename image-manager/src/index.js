import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import App from './pages/App';

import { Images, ImageEdit, ImageNew } from './pages/images';

import RouteWithSubRoutes from './RouteWithSubRoutes';

import registerServiceWorker from './registerServiceWorker';

const routes = [
  {
    path: '/',
    component: Images,
    routes: [
      {
        path: '/add',
        component: ImageNew
      },
      {
        path: '/edit:id',
        component: ImageEdit
      }
    ]
  }
];

const root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <App>
      {routes.map(route => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </App>
  </Router>,
  root
);

registerServiceWorker();
