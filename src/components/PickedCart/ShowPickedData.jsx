import React from 'react';

const ShowPickedData = ({pickItem}) => {
    const {strMeal, strCategory} = pickItem;
    return (
        <div className="flex justify-between">
            <h1>{strMeal}</h1>
            <h1>{strCategory}</h1>
        </div>
    );
};

export default ShowPickedData;