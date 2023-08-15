import { useState } from "react"
import React from 'react'

function Calcular({ result, setResult }) {
const [count1, setCount1] = useState(0)
const [count2, setCount2] = useState(0)


const handleSum = () => {
    const total = count1 + count2
    setResult (total);
}

const result1 = () => {
    setCount1(count1+1)
};

const resultDown = () => {
    setCount1(count1-1)
};
const result2 = () => {
    setCount2(count2+1)
};

const resultDown2 = () => {
    setCount2(count2-1)
};




console.log (handleSum)
  return (
    <div className="btns">
    <div>
        <button onClick={result1}>+</button> 
        <h3>{count1}</h3>
        <button onClick={resultDown} >-</button>
    </div>
    <div>
        <button onClick={result2}> +</button> 
        <h3>{count2}</h3>
        <button onClick={resultDown2}>-</button>
    </div>
    <div className="operations">
  <button onClick={handleSum} class="btn btn-primary">➕</button>
  <button  class="btn btn-primary">➖</button>
  <button  class="btn btn-primary">✖</button>
  <button  class="btn btn-primary">➗</button>
</div>
<div>
    </div>
    </div>
  )
}

export default Calcular