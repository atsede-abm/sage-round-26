import Count from "./Components/Count";
import If_else from "./Components/If_else";
import List from "./Components/List";
import Effect from "./Components/Effect";
import Form from "./Components/Form";
import { useState } from "react";


export default function App(){
  
const [count1,setCount1]=useState(0)
let x =10;
  return (
    <div>
      <Count count1={count1} setCount1={setCount1}/>
      <If_else/>
       {x == 10 && <h1>and oprator is True</h1>}
       {x==10 ? <h1>Ternary oprator is True</h1> : <h1>ternary oprator is False</h1>}
        <List count1={count1} setCount1={setCount1}/>
        <Effect/>
        <Form/>

    </div>
  )
}