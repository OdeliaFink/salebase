require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./lib/db");

const PORT = process.env.PORT || 3002;

// PG database client/connection setup
const { Pool } = require("pg");

const devConfig = `postgresql://${process.env.DB_USER}://${process.env.DB_PASSWORD}:${process.env.DB_HOST}:${process.env.DB_PORT}:${process.env.DB_DATABASE}`;
const proConfig = process.env.DATABASE_URL; // heroku addons

const dbParams = require("./lib/db");
const dataBase = new Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? proConfig : devConfig,
});

dataBase.connect((err) => console.log("connected", err));
const dbHelpers = require("./helpers/dbHelpers")(dataBase);
console.log("db connection test", dbParams);
console.log("process env", process.env);
// const indexRouter = require("./routes/index");
const itemsRouter = require("./routes/items");
const getInventoryAssignments = require("./routes/items-assign");
const biRouter = require("./routes/bi");
const biRouterNeighbourhoods = require("./routes/neighbourhoods");
const getVendors = require("./routes/vendors");

const app = express();
app.use(cors());

app.set("port", PORT);

//deployment setup
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));
// }

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/items", itemsRouter(dbHelpers));
app.use("/items-assign", getInventoryAssignments(dbHelpers));
app.use("/bi", biRouter(dbHelpers));
app.use("/neighbourhoods", biRouterNeighbourhoods(dbHelpers));
app.use("/vendors", getVendors(dbHelpers));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

module.exports = app;
