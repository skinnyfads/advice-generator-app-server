import { NextFunction, Request, Response } from "express";

const secret = process.env.SECRET;

function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["token"];

  if (token !== secret) {
    return res.status(401).send({ message: "Authentication is required" });
  }
  next();
}

export default auth;
