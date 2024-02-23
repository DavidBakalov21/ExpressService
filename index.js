const express = require("express");
const cors = require("cors");
const mongoose = require("./mongoConnection");
const handlerStudentsInfo = require("./handlers/handlerStudentsInfo");
//const axios = require("axios");
const app = express();
const port = 1000;
const whitelist = ["http://localhost:2000","http://127.0.0.1:8000"];
const corsOptions = {
  origin: originFunction,
};
mongoose.set("strictQuery", false);
function originFunction(origin, callback) {
  if (whitelist.includes(origin) || !origin) {
    callback(null, true);
  } else {
    callback(new Error("Not allowed by CORS"));
  }
}
app.use(cors(corsOptions));
app.get("/allStudentsInfo", redirectReqToDjango);
app.listen(port, () => {
  console.log("listens");
});

async function redirectReqToDjango(req, res) {
  try {
    const allInfo=await handlerStudentsInfo();
    console.log(allInfo);
    res.send(allInfo);
  } catch (error) {
    console.error("Error making request to Django:", error.message);
    res.status(500).json({ error: "Internal Server Error with express" });
  }
}
