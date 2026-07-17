require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoute = require("./routes/contact");

const app = express();

const allowedOrigins = [
  "https://my-portfolio-o1c7hncnf-tharuntharun.vercel.app",
  process.env.CLIENT_ORIGIN,
  "http://localhost:3000",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json({ limit: "50kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/contact", contactRoute);

// Fallback for unknown routes.
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

module.exports = app;
