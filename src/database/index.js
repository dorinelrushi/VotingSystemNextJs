import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionURL =
    "mongodb+srv://dorinel1:dorinel1@cluster0.ulxuz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  try {
    await mongoose.connect(connectionURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds
    });
    console.log("Database connection is successful");
    console.log(
      "Mongoose connection state after connect:",
      mongoose.connection.readyState
    );
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default connectToDB;
