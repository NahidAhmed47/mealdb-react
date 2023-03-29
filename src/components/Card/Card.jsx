import React from 'react';

const Card = ({cart}) => {
    // console.log(cart);
    const {strMealThumb, strMeal, strArea, strCategory} = cart;
    return (
        <>
            <div className="p-1 border-2 rounded-md">
                <img className="rounded" src={strMealThumb} alt="" />
                <div className="m-2">
                    <h1 className="font-semibold text-base">Name: {strMeal}</h1>
                    <p className="text-sm font-semibold my-1">Country origin: {strArea}</p>
                    <p className="text-sm font-semibold">Category: {strCategory}</p>
                </div>
                    <button className="font-semibold text-base h-8 w-full bg-lime-700 text-white rounded">Pick Items</button>
            </div>
        </>
    );
};

export default Card;