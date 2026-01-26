const express=require ('express')
require('./db')
const Book=require('./model/book')
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken')
const User=require('./model/user')

const app=express()

app.use(express.json())

app.post('/signup',async(req,res)=>{
    const {fullName,userName,password}=req.body

    const hashedpassword =await bcrypt.hash(password,10)

    const user =new User({fullName,userName,password:hashedpassword})
        user.save()
        res.status(201).json({
            success:true,
            message:"account created!"
    })
})

app.post('/login',async(req,res)=>{
    const {userName,password} =req.body
    const user= await User.findOne({userName})
    if (!user) res.status(404).json({message:"incorrect userName or password"})
        const isMach = await bcrypt.compare(password,user.password)
    if(!isMach) res.status(404).json({message:"incorrect password"})
        const token =jwt.sign({id:user._id, fullName:user.fullName},"123")
    res.status(201).json({
        success: true,
        message:"logedin!",
        token: token
    })
})

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