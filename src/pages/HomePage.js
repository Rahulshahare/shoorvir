import React, { useRef } from "react";
import { useNavigate } from "react-router"
import imageCertified from './../images/undraw_certificate_71gt.svg';
import iconLeft from './../images/caret-left-fill.svg';
import iconRight from './../images/caret-right-fill.svg';  
import { Category } from "../state/AppState";


function HomePage(){
    const wrapperRef = useRef(null);
    const navigate = useNavigate();
    const categoryList = Category.useState(s=>s.CategoryList)

    const scrollLeft = () => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollLeft -= 100; // Adjust the value as needed
        }
    };

    const scrollRight = () => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollLeft += 100; // Adjust the value as needed
        }
    };
    return(
        <div className="container">
            <div className="row mb-5">
                <div className="col mt-2">
                    <h1 className="text-center ">Home services at your doorstep</h1>
                </div>
            </div>
            <div className="row">
                <p className="font1point2rem fontWeight600 text-secondary">Technical Services</p>
                <div className="d-flex overflow-auto py-3 flex-nowrap ::-webkit- scrollSmooth" id="wrapper" ref={wrapperRef}>
                    {
                        categoryList.map((category, index) => {
                            return (
                                <div className="flex-shrink-0 me-3" key={index}>
                                    <button type="button" className="btn btn-outline border btn-lg" onClick={()=>navigate("/search?category="+category)}>
                                        <div className="categoryListBg pt-2 mt-2 rounded">
                                            <img className="responsive" src={imageCertified} alt="centified" width={100}/>
                                        </div>
                                        <p className="text-center mt-3 font1rem fontWeight600">
                                            <span className="text-secondary">CERTIFIED</span> {category}</p>
                                    </button> 
                                </div>
                            )
                        })
                    }                
                </div>
            
                <div className="col col d-flex justify-content-end mt-1">
                    <div className="border rounded shadow-sm p-2" onClick={scrollLeft}><img src={iconLeft}/></div>
                    <div className="border rounded shadow-sm p-2 ms-1" onClick={scrollRight}><img src={iconRight} /></div>
                </div>
            </div>
            
        </div>
    )
}

export default HomePage;