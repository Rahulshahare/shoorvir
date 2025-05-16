import React from "react";
import { UIStore } from "../state/AppState";
import iconMap from './../images/geo-alt-fill.svg';
import iconDown from './../images/caret-down-fill.svg';
function Nav( ){
    
    return(
        <nav className="navbar fixed-top bg-body bg-white border-bottom">
            <div className="container-fluid">
                <div className="col">
                    <a className="navbar-brand siteLogo" href="/">SHOORVIR</a>
                </div>
                <div className='col'>
                    <div className="d-grid mx-1 my-1 " onClick={()=>UIStore.update(s =>{s.showModel = !s.showModel})}> 
                        <button type="button" className="btn btn-outline border btn-lg">
                            <div className='row'>
                                <div className="col text-center">
                                    <img src={iconMap} alt="MapIcon"/>
                                </div>
                                <div className="col-8">
                                    <h5 className=' text-secondary text-center'>Shyam Nagari, Pandharka</h5>
                                </div>
                                <div className="col text-center">
                                    <img src={iconDown} alt="downIcon"/>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </nav>
    )
}

export default Nav;