const express = require("express");
const { sendMessage } = require("./controllers/sendMessage");
const app = express();
const cors = require('cors');
require("dotenv").config();
const PORT = process.env.PORT;


//form data
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post("/sendmessage", sendMessage);
//intilaise server
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT} `);
});
