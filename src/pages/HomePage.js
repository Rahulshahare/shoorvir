import React, { useRef } from "react";
import { useNavigate } from "react-router"
import imageCertified from './../images/undraw_certificate_71gt.svg';
import iconLeft from './../images/caret-left-fill.svg';
import iconRight from './../images/caret-right-fill.svg';  
import { Category } from "../state/AppState";


function HomePage(){
    const wrapperRef = useRef(null);
    const navigate = useNavigate();
    const categorizedProfessions = Category.useState(s=>s.categorizedProfessions)

    
    return(
        <div className="container">
            <div className="row mb-5">
                <div className="col mt-2">
                    <h1 className="text-center ">Home services at your doorstep</h1>
                </div>
            </div>
            <div>
            {Object.entries(categorizedProfessions).map(([category, professions], index) => (
                <div className="row mb-4" key={index}>
                    <p className="font1point2rem fontWeight600 text-secondary mb-2">{category}</p>
                    <div className="d-flex overflow-auto py-3 flex-nowrap" id={`wrapper-${index}`}>
                        {professions.map((profession, i) => (
                            <div className="flex-shrink-0 me-3" key={i}>
                                <button
                                    type="button"
                                    className="btn btn-outline border btn-lg categoryListBg "
                                    onClick={() => navigate(`/search?category=${profession}`)}
                                >
                                    <div className="categoryListBg pt-2 mt-2 rounded">
                                        <img className="responsive" src={imageCertified} alt="certified" width={100} />
                                    </div>
                                    <p className="text-center mt-3 font1rem fontWeight600"> {profession}</p>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            </div>
            
        </div>
    )
}

export default HomePage;