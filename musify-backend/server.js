const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
 const Pusher = require('pusher')

//App Config
const app = express();
const port = process.env.PORT || 8080;

// //Middleware
app.use(express.json()); //helps to process with JSON Files
app.use(cors());
//DB Config
const connection_url =
  "mongodb+srv://admin:KvrwA5m73wvNfjAY@cluster0.2e9lb.mongodb.net/musifyDB?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("DB CONNECTED!!!!!!");
});
//API routes
app.get("/", (req, res) => res.status(200).send("hello world"));
//Listen
app.listen(port, () => console.log("listening on localhost:", port));
