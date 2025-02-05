import React from "react";

function User ({ pic, name, price, rating })  {
    return (
        <div className="card h-100 shadow-lg">
            <div className="card-body">
                <div className="text-center p-3">       
                <img className="col-lg-4 col-md-12 mb-4" src={pic} alt={name} ></img>
                    <h5 className="card-title">{name}</h5>
                    <p>Price: ${price}</p>
                    <p>Rating: ⭐{rating}</p>
                </div>     
            </div>    
        </div>
    )
}


    const PricingList = () => {
    const items = [
        {
            pic: "https://images.pexels.com/photos/775203/pexels-photo-775203.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Item 1",
            price: 25.99,
            Rating: 4.5,
        },

        {
            pic: "https://images.pexels.com/photos/775203/pexels-photo-775203.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Item 2",
            price: 45.6,
            Rating: 7.8,
        },

        {
            pic: "https://images.pexels.com/photos/775203/pexels-photo-775203.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Item 3",
            price: 34.7,
            Rating: 6.6,
        },
        
        {
            pic: "https://images.pexels.com/photos/775203/pexels-photo-775203.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Item 4",
            price: 1000,
            Rating: 10,
        },

        {
            pic: "https://images.pexels.com/photos/775203/pexels-photo-775203.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Item 5",
            price: 30,
            Rating: 5,
        },

        {
            pic: "https://images.pexels.com/photos/775203/pexels-photo-775203.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Item 6",
            price: 32.4,
            Rating: 7.7,
        },
    ];
    return (
        <div className="App">
            <div className="row"></div>
            {items.map((usr) => (
                <User name={usr.name} pic={usr.pic} rating={usr.Rating} price={usr.price}/>
            ))}
        </div>
    )
}


export default PricingList;