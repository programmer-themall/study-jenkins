import express from "express";

async function startServer() {
  const app = express();
  app.get("/", (req, res) => {
    res.send("Hello World!");
    res.end();
  });

  app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
  });
}

startServer();
