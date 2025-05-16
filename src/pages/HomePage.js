import React from "react";
import { useNavigate } from "react-router"
import iconCertified from './../images/undraw_certificate_71gt.svg'
import { Category } from "../state/AppState";

function HomePage(){
    const navigate = useNavigate();
    const categoryList = Category.useState(s=>s.CategoryList)
    return(
        <div className="container">
            <div className="row mb-5">
                <div className="col mt-2">
                    <h1 className="text-center text-secondary">Home services at your doorstep</h1>
                </div>
            </div>
            <div className="row">
                {
                    categoryList.map((category, index) => {
                        return (
                            <div className="col col-sm-3 d-grid py-3" key={index}>
                                <button type="button" className="btn btn-outline border btn-lg shadow-sm categoryListBg" onClick={()=>navigate("/search?category="+category)}>
                                    <img className="responsive" src={iconCertified} alt="centified" width={100}/>
                                    <h4 className="text-center">CERTIFIED {category}</h4>
                                </button> 
                            </div>
                        )
                    })
                }                
            </div>
            
        </div>
    )
}

export default HomePage;