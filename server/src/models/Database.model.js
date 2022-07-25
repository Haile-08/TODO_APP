const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://haile:icuicb4u@todoapp.kpinky4.mongodb.net/TODOAPP?retryWrites=true&w=majority",
  () => {
    console.log("connected with database ...");
  }
);
