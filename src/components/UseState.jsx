import React, { useState } from 'react';

const UseState = () => {
    let [num,setNum] = useState(0);
    const change =()=>setNum(num+1)
    return (
        <div>
            <div className='text-center'>
                <h1>You have clicked {num} times</h1>
                <button onClick={change} className='btn btn-primary'>Count</button>
            </div>
        </div>
    );
};

export default UseState;