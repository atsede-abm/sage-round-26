const express=require ('express')
require('./db')
const Book=require('./model/book')
const app=express()

app.use(express.json())

app.get('/books',async(req,res)=>{
    const books=await Book.find()
    return res.status(200).json(books)
})

app.get('/books/:id',async(req,res)=>{
    const book=await Book.findById(req,URLSearchParams.id)
    if (!book) return res.status(404).json({
        success:"false",
        message:"book not found"
    })
    returnres.status(200).json(book)
})
app.post('/books',async (req,res)=>{
    try{
        const body=req.body
        const book=new book(body)
        await book.save()
        res.status(201).json(book)

    }catch(err){
        console.log(err)
        res.status(500).json({
            success: "false",
            message: "error"
        })
    }
})
app.delete('/books/:id',async(req,res)=>{
    await Book.findByIdAndDelete(req,URLSearchParams.id)
    res.status(200).json({
        success:"True",
        message: "Book Deleted"
    })
})

app.put("/books/:id",async (req,res)=>{
    const book = await Book.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    res.status(200).json(book)
})




app.listen(8000,()=>{
    console.log("server started at port 8000")
}) 