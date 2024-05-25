import React, { useRef } from 'react';

const UseRef = () => {

    let myHeading = useRef();
    let myImg = useRef();

    const change = () => {
        // myHeading.current.innerText="New heading";
        // myHeading.innerText="New heading";
        myImg.current.src = 'https://placehold.co/300';
        myImg.current.setAttribute('width','500px');
        myImg.current.setAttribute('height','300px');
    }

    return (
        <div>
            {/* React Hook useRef() */}
            {/* <h1 ref={myHeading}>Defalut heading</h1> */}
            {/* <h1 ref={(h1)=>myHeading= h1}>Defalut heading</h1>
             */}

             <img ref={myImg} src="https://placehold.co/300x200" alt="" />
            <button onClick={change}>Click</button>
        </div>
    );
};

export default UseRef;