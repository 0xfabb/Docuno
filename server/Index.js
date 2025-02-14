const express = require("express");

const app = express();

app.get("/", (err, res) => {
  return res.send("This is Homepage");
});

app.get("/about", (err, res) => {
  return res.send("This is About Page");
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`App is listening on Port 5000`)
);
