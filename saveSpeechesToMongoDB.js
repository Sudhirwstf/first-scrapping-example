import { connectToAtlas } from "./connectToAtlas.js";

export async function saveSpeechesToMongoDB(speeches) {
  let client;
  try {
    client = await connectToAtlas();
    // Use the client to interact with the database
    const database = client.db("rbi");
    const collection = database.collection("speeches");

    // Perform database operations here;
    await collection.drop();
    const result = await collection.insertMany(speeches);
    console.log(result.acknowledged, result.insertedCount);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Close the connection when finished
    await client?.close();
  }
}
