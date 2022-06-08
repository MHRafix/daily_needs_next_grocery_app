import mongoose from "mongoose";

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log("Already connected");
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Use previous connection");
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(
    // `mongodb+srv://DAILY_NEED:iWOts7X9fABUg2mS@cluster0.ttpfp.mongodb.net/DAILY_NEED?retryWrites=true&w=majority`,
    `mongodb+srv://Rafiz:HYBpMP9n5pZXukIO@cluster0.ihrci.mongodb.net/DAILY_NEED?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
    }
  );
  console.log("New connection");
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("Not disconnected");
    }
  }
}

function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocToObj };

export default db;
