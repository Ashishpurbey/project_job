import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import products from './data/products.js'
const port = process.env.PORT;

connectDB();

const app = express();


app.get('/api/products',(req,res)=>{
    res.json(products);
})

app.get('/api/products/:id',(req,res)=>{
    const product = products.find((product)=>product._id==req.params.id);
    res.json(product);
})

app.listen(port,()=> console.log(`server is running on port ${port}`));
