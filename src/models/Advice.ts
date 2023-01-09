import mongoose from "mongoose";

const { Schema, model } = mongoose;

const adviceSchema = new Schema({
  id: Number,
  text: String,
});
const Advice = model("advice", adviceSchema);

export default Advice;
