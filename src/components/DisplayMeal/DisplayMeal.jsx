import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const DisplayMeal = ({text}) => {
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        const LoadData = async(value)=>{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
            const data = await res.json();
            setCart(data.meals)
        }
        LoadData(text === '' ? 'fish' : text);
    },[text])
    return (
        <div className="grid grid-cols-5 min-h-[100vh]">
            <div className="col-span-4 w-full">
                <h1 className="font-semibold text-base text-center mt-4">Your Searched food({cart?.length}) show here:</h1>
                <div className="w-full px-10 pt-5 grid grid-cols-4 gap-5">
                    {
                        cart?.map(singleCart => <Card cart={singleCart} key={singleCart.id}></Card>)
                    }
                </div>
            </div>
            <div className="bg-lime-300 w-full">
                <h1 className="font-semibold text-base text-center mt-4">Added Items:</h1>
            </div>
        </div>
    );
};

export default DisplayMeal;