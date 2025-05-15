import React, { useState } from 'react';
import './App.css';
import Nav from './component/Nav';
import Model from './component/Model';


function App() {
  const [showModel, isShowModel] = useState(false)
  const handleClick =()=>{
    isShowModel(!showModel);
  }
  return (
    <>
      <Nav isShowModel={handleClick}/>
      {showModel ? <Model isShowModel={handleClick}/> : ''}
    </>
  );
}

export default App;
