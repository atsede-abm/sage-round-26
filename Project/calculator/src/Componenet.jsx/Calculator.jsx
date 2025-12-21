import { useState } from "react"


export default function Calculator(){
     const[value,setValue]=useState("")
    return <div className="box">
        <form>
            
   <div className="Hero">
<div className="display">
<input type="text" value={value} onChange={value}/>
</div>

<div>
    <input  className="btn" type="button" value="C" onClick={e=>setValue(" ")}/>
    <input className="btn" type="button" value="DE" onClick={e=>setValue(value.slice(0,-1))}/>
    <input className="btn" type="button" value="." onClick={e=>setValue(value+e.target.value)}/>
    <input className="btn" type="button" value="+" onClick={e=>setValue(value+e.target.value)}/>
</div>
<div>
    <input className="btn" type="button" value="7" onClick={e=>setValue(value+e.target.value)}/>
    <input className="btn" type="button" value="8" onClick={e=>setValue(value+e.target.value)}/>
    <input className="btn" type="button" value="9" onClick={e=>setValue(value+e.target.value)}/>
    <input className="btn" type="button" value="*" onClick={e=>setValue(value+e.target.value)}/>
</div>
 <div>
    <input className="btn" type="button" value="4" onClick={e=>setValue(value+e.target.value)}/>
    <input className="btn" type="button" value="5" onClick={e=>setValue(value+e.target.value)}/>
    <input className="btn" type="button" value="6" onClick={e=>setValue(value+e.target.value)}/>
    <input className="btn" type="button" value="-" onClick={e=>setValue(value+e.target.value)}/>
</div>
 <div>
    <input className="btn" type="button" value="1" onClick={e=>setValue(value+e.target.value)}/>
    <input className="btn" type="button" value="2" onClick={e=>setValue(value+e.target.value)}/>
    <input className="btn" type="button" value="3" onClick={e=>setValue(value+e.target.value)}/>
    <input className="btn" type="button" value="/" onClick={e=>setValue(value+e.target.value)}/>
</div>
<div>
    <input className="btn" type="button" value="0" onClick={e=>setValue(value+e.target.value)}/>
    <input className="btn1" type="button" value="=" onClick={e=>setValue(eval(value))}/>
    
</div>
 
 </div>

  </form>
 </div>
  
      
    
}