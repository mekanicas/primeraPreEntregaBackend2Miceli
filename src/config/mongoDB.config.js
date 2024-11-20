import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://admin:123@cluster0.e4lbb.mongodb.net/e-commerce"
    );
    console.log("Mongo DB connected");
  } catch (error) {
    console.log(error);
    res.setHeader("Content-Type", "application/json");
    return res.status(500).json({
      error: `Error connecting to mongo db`,
      detalle: `${error.message}`,
    });
  }
};
