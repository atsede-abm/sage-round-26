const express= require('express')
let books=require('./data/books')

const app=express()
app.use(express.json())
app.use((req,res,next)=>{
    if(req.query.key !=10){
        res.status(201).json({
            success:'false',
            message:'key not found!'
        })
    } else{
        next()
    }
})

app.get('/books',(req,res)=>{
    res.status(200). json(books)
})
  

// body
app.post("/books/",(req,res)=>{
    const body =req.body

    const id=books.length+1
    body.id=id
    console.log(body)
    books.push(body)
    res.status(201).json({
            success: "true",
            message: "book created"
        })
})
app.delete("/books/:id",(req,res)=>{
    const id =req.params.id
    books=books.filter((book)=>book.id !=id)
    res.status(200).json({
        success: "true",
            message: "book deleted"
    })
})
app.put('/books/:id',(req,res)=>{
     const body =req.body
    const id =req.params.id
    books=books.map((book)=>{
        if(book.id ==id){

            return {...book,...body}
        }else{
            return book
        }
    })
    res.status(200).json({
        success: "true",
            message: "book Edited!"
    })
})

// query
app.get("/books/search",(req,res)=>{
    const q =req.query.q.toLowerCase()

    const book=books.filter((book)=>book.title.toLowerCase().includes(q))
    console.log(q)
    res.status(200).json(book)
})

// params

app.get('/books/:id',(req,res)=>{
    const id =req.params.id
    const book=books.find((book)=>book.id == id)
    console.log(book)
    if(book == undefined){
        res.status(404).json({
            success: "false",
            message: "book not found"
        })
    }else{
        res.status(200).json(book)
    }
})

app.listen(8000,()=>{
    console.log("server listening on port 8000")
})