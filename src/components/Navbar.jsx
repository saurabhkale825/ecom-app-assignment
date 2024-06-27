import React, { useContext, useState } from 'react';
import "./styles/Navbar.css";
import ECommerceContext from '../contexts/ECommerceContext';

function Navbar() {
    const { filter, setFilter } = useContext(ECommerceContext);
    const [beauty , setBeauty] = useState(false);
    const [furniture , setFurniture] = useState(false);
    const [groceries , setGroceries] = useState(false);

    const addCategory = (item) => {
        if (filter.includes(item)) {
            setFilter(filter.filter((category) => category !== item));
            (item === "beauty") ? setBeauty(false) : (item === "furniture") ? setFurniture(false): setGroceries(false);
        } else {
            setFilter([...filter, item]);
            (item === "beauty") ? setBeauty(true) : (item === "furniture") ? setFurniture(true): setGroceries(true);

        }
    };

    return (
        <div className='navbar'>
            <div>Filter by:</div>
            <div onClick={() => addCategory("beauty")} className={beauty === true? "blue" : "normal"}>Beauty</div>
            <div onClick={() => addCategory("furniture")} className={furniture === true? "blue" : "normal"}>Furniture</div>
            <div onClick={() => addCategory("groceries")} className={groceries === true? "blue" : "normal"}>Groceries</div>
        </div>
    );
}

export default Navbar;
