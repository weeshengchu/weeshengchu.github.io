const express = require("express");
// 9. Allow body of content to be send
const bodyParser = require("body-parser");
// access to selected resources from a different origin
const cors = require("cors");

const sendGrid = require("@sendGrid/mail");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Change later to only allow our server
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// node app.js or nodemon app.js
app.get("/api", (req, res, next) => {
  res.send("API Status: It works!");
});

app.post("/api/email", (req, res, next) => {
  console.log(req.body);

  // sendGrid account to get key
  sendGrid.setApiKey(
    "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"
  );
  // from sendGrid
  const msg = {
    to: "weesheng.chu@gmail.com",
    from: req.body.email,
    subject: "Website Contact",
    text: req.body.message
  };

  sendGrid
    .send(msg)
    .then(result => {
      res.status(200).json({
        success: true
      });
    })
    .catch(err => {
      console.log("error: ", err);
      res.status(401).json({
        success: false
      });
    });
});

// http://localhost:3030/api
app.listen(3030, "0.0.0.0");
