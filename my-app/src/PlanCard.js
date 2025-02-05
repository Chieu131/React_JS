import React from "react";
const PlanCard = ({planName, description, feature, price}) =>{
  return(
    <div className="card h-100 shadow-lg">
      <div className="card-body">
        <div className="text-center p-3">
          <h5 className="card-title">{planName}</h5>
          <span className="h2">${price}</span>/month
          <br /><br />
          <ul className="List-group custom-list">
            {feature.map((feature, index) => (
              <li
              key={index}
              className={`List-group-item custom-list-item ${feature.disabled ?'disabled' : ''}`}>
                <span className={`feature-icon ${feature.disabled ?'disabled' :''}`}></span>
                {feature.text}
              </li>
            ))}
          </ul>
          <small>{description}</small>
          <br /><br />
        </div>
        <P className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content</P>
      </div>
      <div className="card-body text-center">
        <button className="btn btn-outline-primary btn-lg" style={{ borderRadius: '30px'}}>Select</button>
      </div>
    </div>
  );
};

export default PlanCard;