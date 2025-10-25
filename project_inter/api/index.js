import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoute from './routes/auth.js';
import clothRoute from './routes/cloth.js';
import orderRoute from './routes/order.js'
import cartRoute from './routes/cart.js'
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

app.use("/api/auth", authRoute);
app.use("/api/cloth", clothRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);

//Response Handler Middleware

app.use((obj, _req, res, _next)=>{
    const statusCode = obj.status || 500;
    const message = obj.message || "Something went wrong!";
    return res.status(statusCode).json({
        success: [200,201,204].some(a=> a === obj.status) ? true : false,
        status: statusCode,
        message: message,
        data: obj.data
    });
});


//DB Connection and server startup
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/wardrobe';
const PORT = process.env.PORT || 8800;

const connectMongoDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000 // fail fast if can't connect
        });
        console.log('Connected to Database!');
    } catch (error) {
        console.error('MongoDB connection error:', error.message || error);
        throw error;
    }
}

const startServer = async () => {
    try {
        await connectMongoDB();
        app.listen(PORT, ()=>{
            console.log(`Server listening on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Failed to start server:', err.message || err);
        process.exit(1);
    }
}

startServer();