import React, { useState } from 'react';

const NewToDo = () => {

    const [list,setList] = useState([])
    const [item,setItem] = useState("")

    const AddToList = () => {
        list.push(item)
        setList([...list])
    }

    const removeItem = (i) =>{
        list.splice(i,1)
        setList([...list])
    }


    return (
        <div>
            <div className='d-flex w-50 ms-5 mt-5'>
                <input onChange={(e)=>setItem(e.target.value)} type="text" placeholder='Item' className="form-control" />
                <button onClick={AddToList} className='btn btn-primary'>Add</button>
            </div>
            <div className="mt-3">
                <ul>
                    {
                        list.length !== 0 ? (
                            list.map((item,i)=>{
                                return <li key={i}>{item } <button onClick={()=>removeItem(i)} className='btn btn-sm btn-danger'>Remove</button></li>
                            })
                        ) : (<li>Empty</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default NewToDo;