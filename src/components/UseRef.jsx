import React, { useRef } from 'react';

const UseRef = () => {

    let myHeading = useRef();

    const change = () => {
        // myHeading.current.innerText="New heading";
        myHeading.innerText="New heading";
    }

    return (
        <div>
            {/* React Hook useRef() */}
            {/* <h1 ref={myHeading}>Defalut heading</h1> */}
            <h1 ref={(h1)=>myHeading= h1}>Defalut heading</h1>
            <button onClick={change}>Click</button>
        </div>
    );
};

export default UseRef;