import React,{useEffect, useState} from 'react'

export default function App(){
    console.log('okj');

    const [n,setN] = useState(10)

    useEffect(()=>{

        if(n === 0) {
            return
        }
       
        let timer = setTimeout(()=>{
            setN(n-1)
        },1000)

        return ()=>{
            clearTimeout(timer)
        }
    },[n])

    console.log(n);

    return (<div>  
            <button onClick={()=>{setN(n-1)}}>-</button>
            <h1>{n}</h1>
            <button onClick={()=>{
                    setN(preN=>preN+1)
                }}>+</button>
    </div>)
}