import { useState} from "react"


export default function Adding_calculator(){
    const [num1,setNum1] = useState();
     const [num2,setNum2] = useState();
     const [sum,setSum]= useState();
const handAdding=()=>{
setSum( Number(num1) + Number(num2))
}
    
    return <>
    <form>
        <lable for="num1">  num1 : </lable>
        <input id="num1"
          type="number"
          value={num1}
          placeholder=" enter first number"
          onChange={(e)=>setNum1(e.target.value)}
        />
        <label for="num2">  num2 : </label>
        <input id="num2"
          type="number"
          value={num2}
          placeholder=" enter second number"
          onChange={(e)=>setNum2(e.target.value)}

        />
    </form>
   <button onClick={handAdding}> Adding </button>
   <h1>The sum is : {sum}</h1>

    </>
}