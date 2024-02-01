import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";


const getProducts = asyncHandler(async(req,res)=>{
    const products = await Product.find();
    res.json(products);
})

const getProductById = asyncHandler(async(req,res)=>{
    const product =await Product.findById(req.params.id);

    if(product){
        return res.json(product);
    }
    res.staus(404);
    throw new Error('Product no found');
})

export {getProducts,getProductById};
