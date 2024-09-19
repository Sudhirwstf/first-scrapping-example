import { MongoClient } from "mongodb";
const mongodbUri =
  "mongodb+srv://sudhirmodanwal:REuyewLQmKRwR3nH@cluster0.x77ym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
export async function connectToAtlas() {
  try {
    const client = await MongoClient.connect(mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas successfully!");
    return client;
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
}
