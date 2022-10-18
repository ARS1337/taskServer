const express = require("express");
const cors = require('cors')
const app = express();
const port = 3000;
const data = require("./data.json");

app.use(cors())

app.get("/tasks", (req, res) => {
  let tasks = data.Tasks;
  res.send(JSON.stringify(tasks));
});

app.get("/users", (req, res) => {
  let users = data.Users;
  res.send(JSON.stringify(users));
});

// app.post("/delete", (req, res) => {
//     let id = body
//     res.send(JSON.stringify(users));
//   });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
