import { Document } from "mongoose";

export interface Crud extends Document {
  name: String,
  email: String
}