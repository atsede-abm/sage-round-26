
export default function List(props){
    let cars = ["Toyota","BMW","Ford","Ford"]
    return<>
    <p className="listColor" style={{backgroundColor:"hotpink"}}>List of cars</p>
    <ul style={{backgroundColor:"red",fontsize:"20px"}}>
        {cars.map((car,index)=>{
            return <li key={index} >{car}</li>
        })}
    </ul>
    <button onClick={()=>{
        props.setCount1(props.count1+1)
    }}>change from list</button>
    </>
}