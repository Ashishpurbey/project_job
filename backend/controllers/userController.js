import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'


//auth user and get token
//post api/user/login
//public
const authUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body;
    const user = await User.findOne({email:email});
    
    if(user && user.matchPassword(password)){
        // generate token
        const token = jwt.sign({usereId:user._id},process.env.JWT_SECRET,{
            expiresIn:'30d'
        });
        //set JWT as HTTP-only cookie 
        res.cookie('jwt',token,{
            httpOnly:true,
            secure:process.env.NODE_ENV !=='development',
            sameSite: 'strict',
            maxAge: 30*24*60*60*1000 //30 days
        });
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        });
    }else{
        res.status(404);
        throw new Error('Invalid email or password');
    }
});

//register user
//post /api/users
//public
const registerUser = asyncHandler(async(req,res) => {
    res.send('register user')
});


//logout user / clear cookie
//post /api/users/logout
//private
const logoutUser = asyncHandler(async(req,res) => {
    res.send('logout user')
});


//get user profile
//get /api/users/profile
//private
const getUserProfile = asyncHandler(async(req,res) => {
    res.send(data)
});

//update user profile
//post /api/users/profile
//private
const updateUserProfile = asyncHandler(async(req,res) => {
    res.send('update user profile')
});


//get user 
//get /api/users/
//private/admin
const getUsers = asyncHandler(async(req,res) => {

    res.send('get user')
});

//get user by id
//get /api/users/:id
//private/admin
const getUserByID = asyncHandler(async(req,res) => {
    res.send('get users by ids')
});




//delete user 
//delete /api/users/:id
//private/admin
const deleteUser = asyncHandler(async(req,res) => {
    res.send('delete user')
});


//update user 
//get /api/users/:id
//private/admin
const updateUser = asyncHandler(async(req,res) => {
    res.send('updateuser')
});




export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser
}


