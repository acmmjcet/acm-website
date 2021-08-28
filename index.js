const express = require("express");
const cors = require("cors");
const { init } = require("./Database/mongoose");
const { add } = require("./functions/add");
const PORT = process.env.PORT || 3001;
const app = express();
//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: "http://127.0.0.1:3000/",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/submit", async function (req, res) {
  // Prepare output in JSON format
  let data = req.body;
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

init();
