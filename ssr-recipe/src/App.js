import React from 'react';
import './App.css';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
const RedPage = loadable(() => import('./pages/RedPage'));
const BluePage = loadable(() => import('./pages/BluePage'));

function App() {
  return (
    <div>
      <Menu></Menu>
      <hr />
      <Routes>
        <Route path="/red" Component={RedPage}></Route>
        <Route path="/blue" Component={BluePage}></Route>
      </Routes>
    </div>
  );
}

export default App;
