const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const Groq = require("groq-sdk");
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

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

console.log(
  "Loaded API KEY:",
  process.env.GROQ_API_KEY ? "YES" : "NO"
);

// =====================
// Groq Chat API Route
// =====================
app.post("/api/chat", async (req, res) => {
  console.log("Chat API called:", new Date().toISOString());

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({
      error: "Question is required",
    });
  }

  try {
    const completion =
      await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: question,
          },
        ],
        model: "llama-3.3-70b-versatile",
      });

    const answer =
      completion.choices[0]?.message?.content ||
      "No response";

    res.json({ answer });
  } catch (error) {
    console.error(
      "Groq Error:",
      error?.message || error
    );

    res.status(500).json({
      error: "Failed to get response from Groq",
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