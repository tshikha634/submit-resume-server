const express = require("express");
const cors = require("cors");
const postRoutes = require("./routes/postRoutes");
const errorRoutes = require("./routes/errorRoutes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type,application/json; charset=UTF-8"
//   );
//   next();
// });

app.use(postRoutes);

app.use(errorRoutes);

app.listen(3002, (err) => {
  if (err) console.log(err);
  console.log("server listening 3002");
});
