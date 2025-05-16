import React, { useState } from 'react';
import './App.css';
import Nav from './component/Nav';
import Model from './component/Model';
import { UIStore } from './state/AppState';


function App() {
  const showModel = UIStore.useState(s=>s.showModel);
  //const [showModel, isShowModel] = useState(false)
  const handleClick =()=>{
    isShowModel(!showModel);
  }
  return (
    <>
      <Nav/>
      {showModel ? <Model/> : ''}
    </>
  );
}

export default App;
