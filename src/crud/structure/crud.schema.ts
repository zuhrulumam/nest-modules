import * as mongoose from "mongoose";

export const CrudSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String
  }
})