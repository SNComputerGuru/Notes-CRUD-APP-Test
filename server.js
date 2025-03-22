const express = require("express");
const cors = require("cors");
const router = require("./Routes/routes");
const app = express();

app.use(cors());

app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => { 
    console.log("Listening on PORT: " + PORT);
});
