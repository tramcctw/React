import React,{useState} from 'react'

export default function App(){
    
    const [n,setN] = useState(0)
    
    const [show,setShow] = useState(true)

    const [data,setData] = useState({
        x:1,
        y:1
    })

    return (<div>
            <p>x:{data.x},y:{data.y}</p>
            <button onClick={()=>{
                setData({
                    ...data,
                    x:data.x+1      
                    // 注意这里不是混合是直接替换
                })
            }}>点我</button>
            <p style={{display:show ? 'block':'none'}}>
                <button onClick={()=>{setN(n-1)}}>-</button>
                <span>{n}</span>
                <button onClick={()=>{
                    // setN(n+1)
                    // setN(n+1)       //异步执行两次执行完还是1
                        setN(preN=>preN+1)
                        setN(preN=>preN+1)
                        // 返回之后拿到的是相加后的值
                    }}>+</button>
            </p>
            <button onClick={()=>{
                setShow(!show)
            }}>isShow</button>

    </div>)
}