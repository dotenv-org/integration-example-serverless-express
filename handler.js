require('dotenv-vault-core').config()

const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
	console.log(process.env)

  return res.status(200).json({
    message: `Hello ${process.env.HELLO}`,
		env: process.env,
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
