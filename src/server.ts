import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// database connection

async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/learning-mongoose");
    console.log("Database connection successfull!");

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to connect database", error);
  }
}

bootstrap();
