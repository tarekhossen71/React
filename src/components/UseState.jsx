import React, { useState } from 'react';

const UseState = () => {
    let [num,setNum] = useState(0);

    return (
        <div>
            <div className='text-center'>
                <h1>You have clicked {num} times</h1>
                <button onClick={()=>setNum(num+1)} className='btn btn-primary'>Count</button>
            </div>
        </div>
    );
};

export default UseState;