import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
    },
    email: {
      type: "String",
      required: true,
    },
    password: {
      type: "String",
    },
    role: {
      type: "String",
      default: "member",
    },
  },
  { timestamps: true, versionKeys: false }
);

export default mongoose.model("User", authSchema);
