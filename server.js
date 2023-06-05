const path = require("path");
const fs = require("fs");
const express = require("express");
const { error } = require("console");

const app = express();
const PORT = 8000;

__dirname = path.resolve();
console.log(__dirname);
const fn = __dirname + "/userList.csv";
//middleware

app.use(express.urlencoded());

//root router
app.get("/", (req, res) => {
  console.log(req.query);

  res.send(`
   <a href="/register">
   <Button>Login</Button></a>`);
});

app.get("/register", (req, res) => {
  console.log(req.query);
  res.sendFile(__dirname + "/view/index.html");

  // res.send(`
  // <a href="/register">
  // <Button>Login</Button></a>`);
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.sendFile(__dirname + "/view/index.html");
  const { email, password } = req.body;
  const str = `${email},${password} \n`;
  console.log(str);
  fs.appendFile(fn, str, (error) => {
    error ? console.log(error.message) : console.log("file is added");
  });
  // res.send(` <h1>Acc created</h1>
  // <a href="/login">
  // <Button>Login</Button></a>`);
});
app.get("/login", (req, res) => {
  console.log(req.query);
  res.sendFile(__dirname + "/view/login.html");
  // res.send(`
  // <a href="/register">
  // <Button>Login</Button></a>`);
});
app.post("/login", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const str = `${email},${password} \n`;
  // res.sendFile(__dirname + "/view/index.html");
  res.send(` <h1>Successfully Login</h1>
  <a href="/register">
  <Button>Register</Button> </a>`);
});
// app.get("/login", (req, res) => {
//   console.log("receive request to users page");
//   res.json({
//     status: "success",
//     message: "server running as normal",
//   });
// });

// app.listen(PORT);

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(` server running at
     http:localhost:${PORT}`);
});

console.log("hello");
