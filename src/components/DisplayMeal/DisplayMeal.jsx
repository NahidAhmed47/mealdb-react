import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Card from '../Card/Card';
import PickedCart from '../PickedCart/PickedCart';
import {savedDataToDb, getSavedData } from '../Utilities/savedDataDb';

const DisplayMeal = ({text}) => {
    const [cart, setCart] = useState([]);
    const [listItem, setListItem] = useState([]);
    useEffect(()=>{
        const LoadData = async(value)=>{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
            const data = await res.json();
            setCart(data.meals)
        }
        LoadData(text === '' ? 'a' : text);
    },[text]);
    useEffect(()=>{
        const storedCart = getSavedData();
        setListItem(storedCart)
    },[cart])
    const getPickedItem = (item)=>{
        let newList = [];
        const exists = listItem.find(singleItem => singleItem.idMeal === item.idMeal);
        if(!exists){
            newList = [...listItem, item];
        }
        else{
            return toast.error("This item already exist!");
        }
        setListItem(newList)
        savedDataToDb(item)
        toast.success("Added your Item!");
    }
    return (
        <div className="grid grid-cols-5 min-h-[100vh]">
            <div className="col-span-4 w-full">
                <h1 className="font-semibold text-base text-center mt-4">Your Searched food({cart?.length}) show here:</h1>
                <div className="w-full px-10 pt-5 grid grid-cols-4 gap-5">
                    {
                        cart?.map(singleCart => <Card cart={singleCart} key={singleCart.idMeal} getPickedItem={getPickedItem}></Card>)
                    }
                </div>
            </div>
            <div className="bg-lime-700 w-full text-white">
                <div className="sticky top-3 h-fit w-full">
                    <h1 className="font-semibold text-base text-center mt-4">Added Items List</h1>
                    <PickedCart listItem={listItem}></PickedCart>
                </div>
            </div>
        </div>
    );
};

export default DisplayMeal;