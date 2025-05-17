import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Nav from './component/Nav';
import Model from './component/Model';
import { UIStore } from './state/AppState';
import HomePage from './pages/HomePage';
import NoPageFound from './pages/NoPageFound';


function App() {
  const showModel = UIStore.useState(s=>s.showModel);
  //const [showModel, isShowModel] = useState(false)
  
  return (
      <Router basename='/shoorvir'>
      {/* <Router> */}
          <Nav/>
          {showModel ? <Model/> : ''}
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<NoPageFound/>}/>
          </Routes>
        </Router>
    
  );
}

export default App;
