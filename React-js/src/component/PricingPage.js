import React from "react";
function PricingPage ({image,name,price,rating}){
    return(
        <section>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="col">
                         <div className="card shadow-sm">
                            <div className="PricingPage">
                                <img className="user-profile-pic" src={image}></img>
                                </div>
                                <h4>{name}</h4>
                                <div className="item-text">
                                <p>Price :${price}</p>
                                <p>Rating:{rating}</p>
                                </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PricingPage;