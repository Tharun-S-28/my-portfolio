require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const contactRoute = require("./routes/contact");

const app = express();

const allowedOrigins = new Set([
  "https://my-portfolio-o1c7hncnf-tharuntharun.vercel.app",
  "https://my-portfolio-nine-gamma-4ptrnw9a27.vercel.app",
  "http://localhost:3000",
]);
if (process.env.CLIENT_ORIGIN) {
  allowedOrigins.add(process.env.CLIENT_ORIGIN);
}

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      callback(null, true);
      return;
    }

    const isAllowedOrigin = allowedOrigins.has(origin);
    const isVercelPreviewOrigin = (() => {
      try {
        const hostname = new URL(origin).hostname;
        return hostname.endsWith(".vercel.app") && hostname.includes("my-portfolio");
      } catch {
        return false;
      }
    })();

    if (isAllowedOrigin || isVercelPreviewOrigin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

const dbInitialization = connectDB();

app.use(cors(corsOptions));
app.options("/api/contact", cors(corsOptions));
app.use(express.json({ limit: "50kb" }));

app.use(async (_req, _res, next) => {
  try {
    await dbInitialization;
  } catch (err) {
    console.error("[server] MongoDB initialization middleware error:", err);
  }
  next();
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/contact", contactRoute);

// Fallback for unknown routes.
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

module.exports = app;
