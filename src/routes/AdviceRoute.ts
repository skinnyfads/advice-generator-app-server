import { Router } from "express";
import AdviceController from "../controllers/AdviceController.js";

const router = Router();

router.get("/", AdviceController.getRandom);
router.post("/new", AdviceController.create);

export default router;
