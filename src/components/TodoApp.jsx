import React, { useState } from 'react';

const TodoApp = () => {
    const [list,setList] = useState([])
    const [item,setItem] = useState("")

    const addToList = () => {
        list.push(item)
        setList([...list])
    }

    const removeItem = (i) => {
        list.splice(i,1)
        setList([...list])
    }

    return (
        <div>
            <div className='d-flex w-50 mt-5 ms-5'>
                <input onChange={(e)=>{setItem(e.target.value)}} type="text" placeholder='Item' className='form-control' />
                
                <button onClick={addToList} className="btn btn-primary">Add</button>
            </div>
            <div className='mt-3'>
                <ul>
                    {
                        list.length !== 0 ? (
                            list.map((item,index)=>{
                                return <li key={index}>{item}<button onClick={()=>{
                                    removeItem(index)
                                }}>Remove</button></li>
                            }) 
                        ): (<li>Empty</li>)
                    }
                      
                </ul>
            </div>
        </div>
    );
};

export default TodoApp;