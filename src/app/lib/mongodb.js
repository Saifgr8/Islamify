// mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;
let mongoDB;

if (!process.env.MONGODB_URL) {
  throw new Error("Add Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
  client = await clientPromise;
  mongoDB = client.db("Islamify_DB");
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
  client = await clientPromise;
  mongoDB = client.db("Islamify_DB");
}

export default mongoDB;
