const mongoose = require("mongoose");
const URI = process.env.DB_URI;
const dbConect = mongoose.connection;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

dbConect.once("open", () => {
    console.log("DB:Online");
    });
