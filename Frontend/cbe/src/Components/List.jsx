
export default function List(){
    let cars = ["Toyota","BMW","Ford","Ford"]
    return<>
    <p className="listColor" style={{backgroundColor:"hotpink"}}>List of cars</p>
    <ul style={{backgroundColor:"red",fontsize:"20px"}}>
        {cars.map((car,index)=>{
            return <li key={index} >{car}</li>
        })}
    </ul>
    </>
}