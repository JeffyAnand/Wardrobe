import cart from "../models/cart.js"

export const addToCart=async(req,res)=>{
    console.log(req.body)
    const {name, pattern, type,price, image,fabric} = req.body.cloth
    const uId = req.body.uId
    const size = req.body.size
    const addedCart= new cart({
        name,
        pattern,
        type,
        price,
        image,
        fabric,
        uId,
        size
    })
    console.log(addedCart)
    await addedCart.save();
}

export const showCart= async(req,res)=>{
    const userCart= await cart.find({uId:req.body.uId})
    console.log(userCart)
    res.json({status:200,msg:"User Cart",data:userCart})
}
export const removeFromCart= async(req,res)=>{
    console.log(req.body)
    await cart.findByIdAndDelete(req.body.clothId);
    const fetchCart= await cart.find({uId:req.body.uId})
    console.log(fetchCart)
    res.json({status:200,title:"Cart",data:fetchCart})  
}