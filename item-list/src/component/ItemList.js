import React from 'react'
import ItemCard from './ItemCard';
const ItemList=() =>{
    const items =[
        {
        id:1,
        image:'https://i.pinimg.com/564x/f8/45/68/f8456800ac55a50acda33ea6b9267e54.jpg',
        name: "Item 1",
        price: 500,
        rating:4.5,
        },
        {
            id:2,
            image:'https://i.pinimg.com/564x/d0/74/38/d07438d2d04499f9bf50ab8fc9bccc53.jpg',
            price: 500,
            rating:4.5,
        },
        {
            id:3,
            image:'https://i.pinimg.com/474x/cb/e2/f7/cbe2f7624174788298d5211a7aef1a3d.jpg',
            price: 500,
            rating:4.5,
        },
        {
            id:4,
            image:'https://i.pinimg.com/736x/c1/1c/a5/c11ca5d0cc9c0ee828c1b87c1ca88716.jpg',
            price: 500,
            rating:4.5,
        },

    ];
    return(
        <div className="row">
                {items.map((item,index)=>(
                    <div key={index} className='col-lg-4 col-md-12 mb-4'>
                        <ItemCard {...item}/>
                        </div>
                ))}
        </div>
      );
    };
 export default ItemList;