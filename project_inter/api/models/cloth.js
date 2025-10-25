import mongoose, {Schema} from 'mongoose';

const ClothSchema = mongoose.Schema(
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
            required: true,
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
        }        

    },
    {
        timestamps: true
    }
);

    export default mongoose.model("Cloth", ClothSchema);