import express from "express";
import apm from "./lib/elastic";

async function startServer() {
  const app = express();
  require("./loader").default({ app });
  app.get("/", (req, res) => {
    res.send("Hello World!");
    res.end();
  });

  app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
  });
}

startServer();
