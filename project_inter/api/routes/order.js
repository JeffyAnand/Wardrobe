import express from "express";
import { createOrder, orderHistory, cancelOrder } from '../controllers/order.controller.js';

const router = express.Router();

router.post("/place-order",createOrder);
router.get("/history/:uId",orderHistory);
router.post("/cancel-order",cancelOrder)


export default router;