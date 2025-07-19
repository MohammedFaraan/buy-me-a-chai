import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    profilePicture: {
      type: String,
    },
    coverPicture: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
