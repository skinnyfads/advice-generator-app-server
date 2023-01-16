import { Router } from "express";
import AdviceController from "../controllers/AdviceController.js";
import auth from "../middleware/auth.js";

const router = Router();

router.get("/", AdviceController.getRandom);
router.post("/new", auth, AdviceController.create);

export default router;
