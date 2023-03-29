import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import {toast } from 'react-toastify';

const Card = ({cart, getPickedItem}) => {
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
                    <button onClick={() => getPickedItem(cart)} className="font-semibold text-base h-8 w-full bg-lime-700 text-white rounded">Pick Item <FontAwesomeIcon icon={faCirclePlus} /></button>
            </div>
        </>
    );
};

export default Card;