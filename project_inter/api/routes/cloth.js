import express from 'express';
import { showCloth, showParticularCloth } from '../controllers/cloth.controller.js';

const router = express.Router();

router.post("/shirt",showCloth)
router.post("/tshirt",showCloth)
router.post("/formaltrouser",showCloth)
router.post("/casualtrouser",showCloth)
router.post("/jeans",showCloth)
router.post("/get-cloth",showParticularCloth)

export default router;
