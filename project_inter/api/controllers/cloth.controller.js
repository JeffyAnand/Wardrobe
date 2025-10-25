import cloth from "../models/cloth.js"


export const showCloth = async(req,res, next)=>{
    try{
        const dress = await cloth.find({type:req.body.type})
        console.log(dress)
        return res.status(200).json({status:200,message:'dress',data:dress})
    }
    catch(error){
        return res.status(500).json({message:"Internal Server Error!"})
        
        
    }
}

export const showParticularCloth = async(req,res,next)=>{
    try{
        console.log(req.body)
        const particularCloth= await cloth.find({_id:req.body.id})
        console.log(particularCloth)
        if(!particularCloth){
            
            return res.status(404).json({message:"particularCloth Not Found"})
        }
        
        res.status(200).json({message:'particularCloth', data:particularCloth})
    }
    catch(error){
        
        res.status(500).json({status:500,message:'Internal Server Error'})
    }
}