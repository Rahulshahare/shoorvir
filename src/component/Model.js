import React from "react";
import { UIStore } from "../state/AppState";
import iconLocation from './../images/crosshair.svg';

function Model (){
    
    return(
         

        <div className="modal fade show modelBody" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <a href="#"><h1 className="modal-title fs-5" id="staticBackdropLabel">
                            <img src={iconLocation}/>
                            <span className="mx-2">Shyam nagari, Pandharkawada, Maharashtra</span>
                        </h1></a>
                        <button type="button" className="btn-close"  aria-label="Close" onClick={()=>UIStore.update(s=>{s.showModel = !s.showModel})}></button>
                    </div>
                    <div className="modal-body">
                        <select className="form-select form-select-lg border mb-3" aria-label="Default select example">
                            <option defaultValue>State</option>
                        </select>
                        <select className="form-select form-select-lg border mb-3" aria-label="Default select example">
                            <option defaultValue>District</option>
                        </select>
                        <select className="form-select form-select-lg border mb-3" aria-label="Default select example">
                            <option defaultValue>Sub-district</option>
                        </select>
                        <select className="form-select form-select-lg border mb-3" aria-label="Default select example">
                            <option defaultValue>City</option>
                        </select>
                        <select className="form-select form-select-lg border mb-3" aria-label="Default select example">
                            <option defaultValue>Local area</option>
                        </select>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Model