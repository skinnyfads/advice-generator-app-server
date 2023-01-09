import { Request, Response } from "express";
import Advice from "../models/Advice.js";

async function create(req: Request, res: Response) {
  const { text } = req.body;

  if (!text) {
    return res.status(501).send({ message: "Please provide advice text" });
  }
  const lastAdvice = await Advice.findOne().sort({ _id: -1 });
  const lastAdviceId: number = lastAdvice?.id || 0;

  const newAdvice = new Advice({
    id: lastAdviceId + 1,
    text,
  });
  return res.send(await newAdvice.save());
}

async function getRandom(req: Request, res: Response) {
  const advices = await Advice.aggregate([{ $sample: { size: 1 } }]);
  return res.send(advices[0]);
}

export default { create, getRandom };
