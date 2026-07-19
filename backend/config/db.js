const mongoose = require("mongoose");

let connectionPromise = null;

async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return true;
  }

  if (connectionPromise) {
    return connectionPromise;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn(
      "[db] MONGODB_URI not set — skipping MongoDB connection. Contact messages will still be emailed but not persisted."
    );
    return false;
  }

  connectionPromise = mongoose
    .connect(uri, {
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => {
      console.log("[db] MongoDB connected");
      return true;
    })
    .catch((err) => {
      console.error("[db] MongoDB connection failed:", err);
      return false;
    })
    .finally(() => {
      connectionPromise = null;
    });

  return connectionPromise;
}

module.exports = connectDB;
