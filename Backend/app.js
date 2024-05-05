const express = require("express");
const multer = require("multer");
const fs = require("node:fs");
const routes = require("./routes");
const cors = require("cors");

const upload = multer({ dest: "uploads/" });

require("dotenv").config();

const app = express();

app.post("/images/single", upload.single("imagenPerfil"), (req, res) => {
  console.log(req.file);
  saveImage(req.file);
  res.send("termina");
});

function saveImage(file) {
  const newPath = `./uploads/${file.originalname}`;
  fs.renameSync(file.path, newPath);
  return newPath;
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8081");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("/api", routes);

const port = 4000;

app.listen(port, () => console.log(`API is running on port ${port}`));
