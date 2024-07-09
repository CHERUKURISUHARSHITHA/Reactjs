

import react,{useState} from 'react';


function Counter() {
   
    const [first,setFirst]=useState(0);
    const [second,setSecond]=useState(0);
    let [result,setResult]=useState(0);
    const handleAdd = () => {
            result=first+second
            setResult(result)
            console.log(result)
    }
    const handleSub = () => {
      result=first-second
      setResult(result)
      console.log(result)
    }
    const handleMul = () => {
      result=first*second
      setResult(result)
      console.log(result)
    }
    const handleDiv = () => {
      result=first/second
      setResult(result)
      console.log(result)
    }
  return (
    <div className='calculator'>
      <h1>Calculator</h1>
      <input type ="text" onChange={(e) => setFirst(parseInt(e.target.value))} /> <br/>
      <input type ="text" onChange={(e) => setSecond(parseInt(e.target.value))} /> <br/>
      <div className='but'>
      <button className='but1' onClick={handleAdd}>Add</button>
      <button className='but2' onClick={handleSub}>Sub</button>
      <button className='but3'onClick={handleMul}>Mul</button>
      <button className='but4'onClick={handleDiv}>Div</button>
      </div>
      <p>{result}</p>
      

    </div>
  )
}

export default Counter
