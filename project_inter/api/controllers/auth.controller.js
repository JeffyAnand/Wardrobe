
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) =>
{
    console.log(req.body)
    const reguser= await User.findOne({ username: req.body.uId});
     if(reguser){
        return res.status(404).json("Id already Exists");
     }
     else{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.uPass, salt);
        const newUser = new User({
            
            username: req.body.uId,
            password: hashPassword,
            email: req.body.uemail,
        });
        await newUser.save();
        return res.status(200).json("User Registered Successfully!");
     }
}



export const login = async (req, res, next) =>
{
    try
    {
        console.log(req.body)
        const user = await User.findOne({ username: req.body.id })
        console.log(req.body, user)
        if (!user)
        {
            return res.status(404).json("User Not Found! & Kindly Register!");
        }
 
        const isPasswordCorrect = await bcrypt.compare(req.body.pass, user.password);
        if (!isPasswordCorrect)
        {
            return res.status(400).json("Password is Incorrect!");
        }
        return res.status(200).json({
                status: 200,
                message: "Login Success",
                data: user
            })
    } catch (error)
    {
        return res.status(500).send("Something went wrong!");
    }
}

export const contactus = async (req, res, next) =>
{
    console.log(req.body)
        const newUser = new contact({
            username: req.body.uId,
            feed: req.body.feed,
            email: req.body.uemail,
        });
        await newUser.save();
        
}