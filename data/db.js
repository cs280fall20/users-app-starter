require("dotenv").config();
const mongoose = require("mongoose");

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

function connect() {
  mongoose.connect(process.env.DB_URI, option);

  mongoose.connection.on("error", (err) => {
    console.log(err);
  });

  mongoose.connection.on("open", () => {
    console.log("Connected to MongoDB!");
  });
}

module.exports = { connect };
