import React from 'react';
import ShowPickedData from './ShowPickedData';

const PickedCart = ({listItem}) => {
    return (
        <div className="px-5 mt-3 font-semibold text-white">
            <h1>Picked Items: ({listItem.length})</h1>
            {
                listItem.map(pickItem => <ShowPickedData pickItem={pickItem} key={pickItem.idMeal}></ShowPickedData>)
            }
        </div>
    );
};

export default PickedCart;