const express = require("express");
const app = express();

const cors = require("cors");
const { db } = require("./db/db");
const { readdirSync } = require("fs");

require("dotenv").config();

const PORT = process.env.PORT;

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("Listening to port:", PORT);
  });
};

server();
