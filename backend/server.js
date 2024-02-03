import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT;

connectDB();

const app = express();

//these middleware parse data from req header so that we can access it
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//help us to parse cooke
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('Api is running..');
})

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port,()=> console.log(`server is running on port ${port}`));
