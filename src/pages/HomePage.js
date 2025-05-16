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
                                <button type="button" className="btn btn-outline border btn-lg" onClick={()=>navigate("/search?category="+category)}>
                                    <div className="categoryListBg pt-2 mt-2 rounded">
                                        <img className="responsive" src={iconCertified} alt="centified" width={100}/>
                                    </div>
                                    <p className="text-center mt-3 font1rem fontWeight600">CERTIFIED {category}</p>
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