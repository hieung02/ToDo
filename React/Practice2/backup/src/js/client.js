import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, hasHistory } from 'react-router';

import Layout from './pages/Layout';



// import Archives from './pages/Archives';
// import Featured from './pages/Featured';
// import Layout from './conponents/Layout';
// import Settings from './pages/Settings';


const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);