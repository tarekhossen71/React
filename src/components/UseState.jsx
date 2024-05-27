import React, { useState } from 'react';

const UseState = () => {
    // let [num,setNum] = useState(0);
    // const change =()=>setNum(num+1)


    let [obj,setObj] = useState({
        key1:'Value 1',
        key2:'Value 2',
        key3:'Value 3',
    });
    const change = () => {
        setObj(
            previousObj=>({
                ...previousObj,
                key1:'New Value for key1'
            })
        )
    }
    
    return (
        <div>
            <div className='text-center'>
                {/* <h1>You have clicked {obj.key1} times</h1> */}
                {/* <button onClick={change} className='btn btn-primary'>Count</button> */}
                <h1>{ obj.key1 }</h1>
                <button onClick={change} className='btn btn-primary'>Change</button>
            </div>
        </div>
    );
};

export default UseState;