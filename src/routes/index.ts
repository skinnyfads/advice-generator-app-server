import { Router } from "express";
import AdviceRoute from "./AdviceRoute.js";

const routes = Router();

routes.use("/advices", AdviceRoute);

export default routes;
