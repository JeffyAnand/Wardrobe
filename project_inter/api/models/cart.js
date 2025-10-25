import mongoose, {Schema} from 'mongoose';

const CartSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        pattern: {
            type: String,
            required: true
        },
        fabric: {
            type: String,
        },
        type: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        uId:{
            type:String,
            required: true
        },
        size:{
            type:String,
            
        }


    },
    {
        timestamps: true
    }
);

    export default mongoose.model("Cart", CartSchema);