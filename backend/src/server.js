const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/plant", require("./routes/plant"));

app.listen(4000, async () => {
    console.log("Backend running on http://localhost:4000");

    try {
        await db.authenticate();
        await db.sync();
        console.log("DB connected");
    } catch (err) {
        console.error(err);
    }
});
