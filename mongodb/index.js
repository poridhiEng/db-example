const { MongoClient } = require("mongodb");

const url = "mongodb://root:example@localhost:27017";

const client = new MongoClient(url);

const dbName = "mydb";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  //   console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");
  const users = await collection.find({ name: "Jack" }).toArray();
  // the following code examples can be pasted here...
  console.log(users);
  return "done.";
}

main()
  .then(() => {})
  .catch(() => {})
  .finally(() => client.close());
