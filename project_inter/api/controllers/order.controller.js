import order from '../models/order.js'
// import Pet from '../models/cloth.js';
import cloth from '../models/cloth.js';
import cart from '../models/cart.js';

export const createOrder = async(req,res,next)=>{
    const{ uId, name, address, pin, paymentmode, state, orderDate, orderStatus}=req.body.order
        const totalPrice=req.body.totalPrice
        console.log(req.body)
        const orderOfUser= new order({
            uId,
            cart:req.body.cart,
            name,
            address,
            pin,
            paymentmode,
            state,
            totalPrice,
            status:"Placed"
        })
        await orderOfUser.save();
        await cart.deleteMany({uId:uId})
        res.json({status:200,title:"Successfully Placed Order",price:orderOfUser.totalPrice})


        }
    

export const orderHistory=async(req,res,next)=>{
    try{
        const orderContainer= await order.find({uId:req.params.uId})
        
        if(!orderContainer){
            return res.status(404).json({message:'Order Not found'})
        }
        return res.status(200).json({status:200,message:'Order',data:orderContainer})
        
    }
    catch(error){
        return res.status(500).json({status:500,message:'Internal Server Error'})
        
    }
}
export const cancelOrder=async(req,res,next)=>{
        try {
            const id = req.body.orderId;
            const particularOrder = await order.find({_id:req.body.orderId})
            console.log(particularOrder)
            
            const updatedOrder = await order.findByIdAndUpdate(id, { status: 'Cancelled' }, { new: true });
            
            const orderContainer= await order.find({uId:req.body.uId})
           
            if(!orderContainer){
                return res.status(404).json({message:'Order Not found'})
               
            }
            
            return res.status(200).json({status:200,message:'Order',data:orderContainer})
          } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
          }
}











// export const orderHistory=async(req,res,next)=>{
    
//     try{
//         const orderContainer= await order.find({uEmail:req.params.uEmail})
//         // console.log(orderContainer)
//         if(!orderContainer){
//             return res.status(404).json({message:'Order Not found'})
//             // return next(CreateError(404,"Pet Not Found"))
//         }
//         // return next(CreateSuccess(200,"Pet",orderContainer))
//         return res.status(200).json({status:200,message:'Order',data:orderContainer})
        
//     }
//     catch(error){
//         return res.status(500).json({status:500,message:'Internal Server Error'})
//         // return next(CreateError(500,"Internal Server Error!"))
//     }
// }
// export const cancelOrder=async(req,res,next)=>{
//     try {
//         const id = req.body.orderId;
//         const particularOrder = await order.find({_id:req.body.orderId})
//         console.log(particularOrder)
//         // const particularPetWithId = particularPet[0]._id
//         // // console.log("hellooo",particularOrder[0].petId,particularOrder[0].uId)
//         // console.log(particularPetWithId)
//         const updatedOrder = await order.findByIdAndUpdate(id, { status: 'Cancelled' }, { new: true });
//         // const updatedPets = await Pet.findByIdAndUpdate(particularPetWithId, { pStatus: 'Free' }, { new: true });
//         const orderContainer= await order.find({uEmail:req.body.uEmail})
//         // console.log(orderContainer)
//         if(!orderContainer){
//             return res.status(404).json({message:'Order Not found'})
//             // return next(CreateError(404,"Pet Not Found"))
//         }
//         // return next(CreateSuccess(200,"Pet",orderContainer))
//         return res.status(200).json({status:200,message:'Order',data:orderContainer})
//       } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Internal server error' });
//       }
// }