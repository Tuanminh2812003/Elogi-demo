import './App.css';
import { Route, Routes } from 'react-router-dom';
import QTDTCDH from './Layouts/QTDTCDH';
import Admin from './Layouts/Elogi_demo_admin';

function App() {
  return (
    <>
      <Routes>
        <Route path='/farm' element={<QTDTCDH/>}/>
        <Route path='/' element={<Admin/>}/>
      </Routes>
    </>
  );
}

export default App;
