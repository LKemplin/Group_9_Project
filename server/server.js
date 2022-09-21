const express = require("express");
const app = express();
const cors = require("cors");
require("./config/mongoose.config");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

require("./routes/music.routes")(app);
require("./routes/user.routes")(app);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
