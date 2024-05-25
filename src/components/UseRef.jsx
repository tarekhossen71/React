import React, { useRef } from 'react';

const UseRef = () => {

    // let myHeading = useRef();
    // let myImg = useRef();
    let firstName,lastName = useRef();
    // let lastName = useRef();

    const change = () => {
        // myHeading.current.innerText="New heading";
        // myHeading.innerText="New heading";
        // change attr 
        // myImg.current.src = 'https://placehold.co/300';
        // myImg.current.setAttribute('width','500px');
        // myImg.current.setAttribute('height','300px');
        // change input 
        let fName = firstName.value;
        let lName = lastName.value;
        alert(fName+' ' +lName);
    }

    return (
        <div>
            {/* React Hook useRef() */}
            {/* <h1 ref={myHeading}>Defalut heading</h1> */}
            {/* <h1 ref={(h1)=>myHeading= h1}>Defalut heading</h1>
             */}

             {/* <img ref={myImg} src="https://placehold.co/300x200" alt="" /> */}
             <input type="text" ref={(a)=>firstName=a} name='fname' placeholder='Enter First Name' />
             <input type="text" ref={(b)=>lastName=b} name='lname' placeholder='Enter Last Name' />
            <button onClick={change}>Click</button>
        </div>
    );
};

export default UseRef;