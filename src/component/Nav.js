import React from "react";

import iconMap from './../images/geo-alt-fill.svg';
import iconDown from './../images/caret-down-fill.svg';
function Nav(){
    const handleClick = () => {
        console.log('Clicked');
      };
    return(
        <nav class="navbar fixed-top bg-body-white border-bottom">
            <div class="container-fluid">
                <div className="col">
                    <a class="navbar-brand" href="#">SHOORVIR</a>
                </div>
                <div className='col'>
                <div className="border mx-5 my-2 p-2 rounded pointer" onClick={handleClick}>
                    <div className='row '>
                    <div className="col ">
                        <img src={iconMap}/>
                    </div>
                    <div className="col-8">
                        <h5 className=' text-secondary'>Location name</h5>
                    </div>
                    <div className="col">
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