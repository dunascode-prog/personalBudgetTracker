const app = require("./app.js");
const { connectdb } = require("./db.js");

//connect database to server
connectdb();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
