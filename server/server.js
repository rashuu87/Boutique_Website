const express=require('express')
const cors=require('cors')
const app=express()
const port=3001

app.use(cors())
const product=require('./product.json')

app.get('/products',(req,res)=>{
    res.json(product)
})

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
})