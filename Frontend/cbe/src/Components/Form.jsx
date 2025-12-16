import { useEffect,useState,useRef } from "react"



export default function Form(){

const[name,setName]=useState()
const count=useRef(0)

useEffect(()=>{
    console.log("render from form comp!")
    count.current++
})
    return <>
    <h2>Render Count: {count.current}</h2>
    <form>
        <lable for="name"> Name:</lable>
            <input 
            type="text"
            id="name"
            value={name}
            onChange={(e)=>{
                console.log(e.target.value)
                setName(e.target.value)
            }}

            />
        
    </form>
    <h1> your Name is:{name}</h1>
    </>
}