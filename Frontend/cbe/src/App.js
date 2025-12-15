import Count from "./Components/Count";
import If_else from "./Components/If_else";
import List from "./Components/List";

export default function App(){
let x =10;
  return (
    <div>
      <Count/>
      <If_else/>
       {x == 10 && <h1>and oprator is True</h1>}
       {x==10 ? <h1>Ternary oprator is True</h1> : <h1>ternary oprator is False</h1>}
        <List/>
    </div>
  )
}