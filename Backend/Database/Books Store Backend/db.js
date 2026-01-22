const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://atsede-abm:Atsede25650@cluster0.bmqs3u2.mongodb.net/?appName=Cluster0')
.then(()=>{
    console.log("MongoDB Connected")})
.catch((err)=>console.log(err))