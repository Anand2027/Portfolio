const express = require("express");
const axios = require("axios");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// HTTP Server
const server = http.createServer(app);

// Socket.IO
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const API_KEY = process.env.GEMINI_API_KEY;

console.log("Loaded API KEY:", API_KEY ? "YES" : "NO");

// =====================
// Gemini Chat API Route
// =====================
app.post("/api/chat", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({
      error: "Question is required",
    });
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [{ text: question }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const answer =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response";

    res.json({ answer });
  } catch (error) {
    console.error(
      "Gemini Error:",
      error.response?.data || error.message
    );

    res.status(500).json({
      error: "Failed to get response from Gemini",
    });
  }
});

// =====================
// Socket.IO
// =====================
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("send-message", (messageData) => {
    console.log("Message received:", messageData);

    io.emit("receive-message", messageData);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});