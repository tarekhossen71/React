import React , { useRef } from 'react';

const Product = () => {
    const APIData = useRef(null)
    const myPTag = useRef()

    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products')
        APIData.current = await response.json();
    }

    const showData = () => {
        myPTag.current.innerText = JSON.stringify(APIData.current)
    }
    return (
        <div>
            <p ref={myPTag}></p>
            <button onClick={fetchData}>Call Api</button>
            <button onClick={showData}>Show Data</button>
        </div>
    );
};

export default Product;