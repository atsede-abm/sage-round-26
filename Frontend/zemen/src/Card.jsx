export default function Card(props){
    return <div style={{'width':'300px', 'padding':'10px'}}>
      <img style={{'width':'200px'}}src={props.img}/>     
       <h1>{props.title}</h1>
       <p>{props.desc}</p>
    
     

    </div>
}