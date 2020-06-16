import React, { useState } from 'react'

export default function HookCounterThree() {
    const[name,setName] = useState({fname:'',lname:''})
    return (
        <div>
            <input 
                type='text'
                value={name.fname}
                placeholder='Enter your first name'
                onChange={e=>setName({...name,fname:e.target.value})}
            />
            <br />
            <input
                type='text'
                value={name.lname}
                placeholder='Enter your last name'
                onChange={e=>setName({...name,lname:e.target.value})}

            />
            <h1>FirstName: {name.fname}</h1>
            <h1>LastName: {name.lname}</h1>
        </div>
    )
}
