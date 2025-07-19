import { Schema, model } from "mongoose";

const paymentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    to_user: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },

    amount: {
      type: Number,
      required: true,
    },
    payment_done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Payment = model("Payment", paymentSchema);

export default Payment;