const express = require("express");
const app = express();
require("./db/conn");
const mensRanking = require("./models/mens");
const router = require("./routes/men");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`listening on port number ${port}`);
});
