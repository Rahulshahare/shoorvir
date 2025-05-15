import React from "react";

import iconMap from './../images/geo-alt-fill.svg';
import iconDown from './../images/caret-down-fill.svg';
function Nav( {isShowModel} ){
    const handleClick = () => {
        console.log('Clicked');
      };
    return(
        <nav className="navbar fixed-top bg-body-white border-bottom">
            <div className="container-fluid">
                <div className="col">
                    <a className="navbar-brand" href="#">SHOORVIR</a>
                </div>
                <div className='col'>
                <div className="border mx-5 my-2 p-2 rounded pointer" onClick={isShowModel}>
                    <div className='row '>
                    <div className="col text-center">
                        <img src={iconMap}/>
                    </div>
                    <div className="col-8">
                        <h5 className=' text-secondary text-center'>Shyam Nagari, Pandharka</h5>
                    </div>
                    <div className="col text-center">
                        <img src={iconDown}/>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col"></div>
            </div>
        </nav>
    )
}

export default Nav;