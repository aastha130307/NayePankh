require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const contactRoutes = require("./routes/contactRoutes");
const donationRoutes = require("./routes/donationRoutes");
const eventRoutes = require("./routes/eventRoutes");
const authRoutes = require("./routes/authRoutes");
const volunteerRoutes = require("./routes/volunteerRoutes");
const { errorHandler } = require("./middlewares/middleware");

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

app.use("/api/auth",authRoutes);
app.use("/api/events",eventRoutes);
app.use("/api/volunteers",volunteerRoutes);
app.use("/api/donations",donationRoutes);
app.use("/api/contacts",contactRoutes);

app.get("/", (req, res) => {
  res.send("NGO API is running ");
});

app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
})