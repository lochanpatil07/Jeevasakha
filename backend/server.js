require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
        app.use(cors());

(async () => {

    await connectDB();

    app.use(cors());

    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

    app.use(express.json());

    app.use(cookieParser());

    app.use("/api/auth", authRoutes);

    app.get("/", (req, res) => {
        res.send("JeevaSakha Backend Running");
    });

})();

const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });