const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.get("/", (req, res) => {
  const data = req.query.input;
  const processedData = data ? data : "/";

  const payload = "query: " + processedData;

  res.send(payload);
});

app.post("/", (req, res) => {
  const data = req.body;
  const processedData = data ? data : "/";

  const payload = "payload: " + JSON.stringify(processedData);

  res.send(payload);
});

app.listen(port, () => {
  console.log(`ExpressJS listening on port ${port}`);
});
