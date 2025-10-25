import express from 'express';
import { addToCart, removeFromCart, showCart } from '../controllers/cart.controller.js';

const router = express.Router();

router.post("/add-cart",addToCart)
router.post("/show-cart",showCart)
router.post('/remove-cart',removeFromCart)



export default router;
