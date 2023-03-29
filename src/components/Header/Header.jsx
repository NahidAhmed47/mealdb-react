import React from 'react';
import logo from '../../../public/images/Tasty_HUT.png';

const Header = (props) => {
    return (
        <div className="w-full bg-gray-300 py-3 px-16 flex justify-between items-center">
            <img className="h-6" src={logo} alt="" />
            <div className='flex items-center'>
                <input onChange={(e) => props.getSearchText(e)} className="h-8 w-[300px] rounded-l text-sm pl-3 outline-none font-semibold" type="text" placeholder="Search food name"/>
                <button className="px-3 h-8 bg-lime-700 font-semibold text-base text-white rounded-r outline-none">Search</button>
            </div>
        </div>
    );
};

export default Header;