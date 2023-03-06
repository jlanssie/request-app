const express = require("express");
const app = express();
const port = 3000;

let requestCounter = "";

const getDate = () => {
  return Intl.DateTimeFormat('en-GB', { dateStyle: 'short', timeStyle: 'medium' }).format(Date.now()).replace(",", " -");
}

app.use(express.json())

app.get("/", (req, res) => {
  const data = req.query.input;
  const processedData = data ? data : "/";

  requestCounter++;

  const payload = "query: " + processedData + "<br><br>----<br><br>requests received: " + requestCounter;

  console.log(getDate(), "-", req.url, "-", req.body)

  res.send(payload);
});

app.post("/", (req, res) => {
  const data = req.body;
  const processedData = data ? data : "/";

  requestCounter++;

  const payload = "payload: " + JSON.stringify(processedData) + " - " + "requests received: " + requestCounter;

  console.log(getDate(), "-", req.url, "-", req.body)

  res.send(payload);
});

app.listen(port, () => {
  console.log(`ExpressJS listening on port ${port}`);
});
