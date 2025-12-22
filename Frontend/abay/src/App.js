
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,reset } from "./Redux/slice/counterSlice";


function App() {
  const counter=useSelector((state)=>state.counter)
  const dispach=useDispatch
  return <div>
         <h1>{counter.value}</h1>
         <button onClick={()=>{
          dispach(increment())
         }}>Add</button>
         <button onClick={()=>{
          dispach(decrement())
         }}>Didu</button>
          <button onClick={()=>{
          dispach(reset())
         }}>Reset</button> 
    </div>

  
}

export default App;
