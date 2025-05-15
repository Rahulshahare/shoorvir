import React, { useState } from "react";

function Model ( {isShowModel}){
    
    return(
         

        <div className="modal fade show modelBody" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                        <button type="button" className="btn-close"  aria-label="Close" onClick={isShowModel}></button>
                    </div>
                    <div className="modal-body">
                        <select class="form-select border" aria-label="Default select example">
                            <option selected>State</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Model