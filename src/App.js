import React from 'react';
import './App.css';
import { Routes,Route, Router } from 'react-router';
import Nav from './component/Nav';
import Model from './component/Model';
import { UIStore } from './state/AppState';
import HomePage from './pages/HomePage';


function App() {
  const showModel = UIStore.useState(s=>s.showModel);
  //const [showModel, isShowModel] = useState(false)
  
  return (
    <div className='page'>
        <Nav/>
        {showModel ? <Model/> : ''}
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </div>
    
  );
}

export default App;
