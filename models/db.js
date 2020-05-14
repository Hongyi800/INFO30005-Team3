require('dotenv').config()

const mongoose = require("mongoose");


MONGO_URL = "mongodb+srv://hgu3:Ghy123456@cluster0-vyh1u.mongodb.net/test?retryWrites=true&w=majority";


mongoose.connect(MONGO_URL || "mongodb://localhost/info30005", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: "mylibraryapp"
});

const db = mongoose.connection;
db.on("error", err => {
    console.error(err);
    process.exit(1);
});
db.once("open", async () => {
    console.log("Mongo connection started on " + db.host + ":" + db.port);
});

require("./country");
