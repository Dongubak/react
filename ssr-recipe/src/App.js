import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage';

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
