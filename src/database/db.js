const mongoose = require("mongoose");

function connect() {
  mongoose.connect(
    "mongodb+srv://apifullstack:apifullstack@apifullstack.rw2b7fl.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  );

  const db = mongoose.connection;

  db.once("open", () => {
    console.log("Connected to database!");
  });

  db.on("error", console.error.bind(console, "connection error: "));
}

module.exports = {
  connect,
};
