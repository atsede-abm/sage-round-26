import { useState, useEffect} from "react";

function Count(props) {
  
  const[count2,setCount2]=useState(0)
  useEffect(()=> {
    console.log("use effect from count comp")
  },[props.count1])
  return (
    <div>
      <h1 className="setColor">count one: {props.count1}</h1>
      <h1 className="setColor">count two: {count2}</h1>
      <button onClick={()=>{
       props.setCount1(props.count1 +1)
        props.setCount1(props.count1+1);
        
        }}>Add on count 1</button>
       
        <button className="btn-color" onClick={()=>{
          setCount2(count2+1);
         
        }}>add on count 2</button>
        
        <button onClick={()=>{
          props.setCount1(0);
          
        }}>Reset</button>
    </div>
  );
}

export default Count;
