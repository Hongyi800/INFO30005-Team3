const mongoose = require("mongoose");

// Connect to MongoDB -- replace with your own string
CONNECTION_STRING = "mongodb+srv://yuxin:<password>@cluster0-zskbc.mongodb.net/test?retryWrites=true&w=majority";
MONGO_URL = CONNECTION_STRING.replace("<password>",process.env.MONGO_PASSWORD);

console.log(MONGO_URL);

const db = mongoose.connection;
db.on("error", err => {
    console.error(err);
    process.exit(1);
});
db.once("open", async () => {
    console.log("Mongo connection started on " + db.host + ":" + db.port);
});