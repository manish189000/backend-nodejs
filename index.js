const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle GET requests
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Route to handle POST requests
app.post("/data", (req, res) => {
  const data = req.body;
  res.json({ received: data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
