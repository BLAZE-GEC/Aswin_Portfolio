const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// ✅ Serve all files inside "public" (HTML, CSS, JS, images, videos, etc.)
app.use(express.static(path.join(__dirname, "public")));

// ✅ Serve index.html from root (so "/" loads index.html correctly)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ✅ (Optional) direct route for achievements.html
app.get("/achievements", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "achivements.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
