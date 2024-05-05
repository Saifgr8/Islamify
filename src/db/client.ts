import { MongoClient } from "mongodb";


const uri = process.env.MONGODB_URL;
const options = {};

let cachedDb = null;
export async function connectToDatabase() {
    
    if (!process.env.MONGODB_URL) {
      throw new Error('Invalid/Missing environment variable: "MONGODB_URL"');
    }

  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {});

  const db = client.db("Islamify_DB");

  cachedDb = db;
  return db;
}

export default connectToDatabase;

export const clientDB = connectToDatabase();

// let client;
// let databaseClient: Promise<MongoClient>;

// if (process.env.NODE_ENV === "development") {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   let globalWithMongo = global as typeof globalThis & {
//     _mongoClientPromise?: Promise<MongoClient>;
//   };

//   if (!globalWithMongo._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     globalWithMongo._mongoClientPromise = client.connect();
//   }
//   databaseClient = globalWithMongo._mongoClientPromise;
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options);
//   databaseClient = client.connect();
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default (await databaseClient).db("Islamify_DB");
