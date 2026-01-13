const express=require('express')
const users=require('./data/users')

const app=express()

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send("home page")
})


app.get('/posts',(req,res)=>{
    res.render("index")
})
app.get('/about',(req,res)=>{
    res.render("about", {users:users})
})
app.get('/users',(req,res)=>{
    res.json({
        "name": "Abebe",
        "age": 20,
        "gender":"M"
    })
})

app.listen(8000,()=>{
    console.log("server started listening on port 8000")
})