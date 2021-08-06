import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'Routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/dist/boxicons';
import 'boxicons/css/boxicons.min.css';
import 'assets/styles/style.css';
import 'assets/styles/font.css';
import { AuthProvider } from 'helpers/Context';

library.add(fab, fas)
ReactDOM.render(
  <AuthProvider>
    <Routes />
  </AuthProvider>,
  document.getElementById('root')
);
