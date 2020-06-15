import React,{useState} from 'react'

export default function HookCounterTwo() {

    const initialState=0;
    const [count, setCount] = useState(initialState)

    return (
        <div>
            <h3>Count : {count}</h3>
            <button onClick={()=>setCount(prevState=>prevState+1)}>Increase</button> 
            <button onClick={()=>setCount(prevState=>prevState-1)}>Decrease</button> 
            <button onClick={()=>setCount(initialState)}>Reset</button> 

        </div>
    )
}
