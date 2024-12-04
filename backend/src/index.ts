import express from "express";
import cookieParser from "cookie-parser";
const app = express();


import authRoutes from "../routes/auth.route.js";
import messageRoutes from "../routes/message.route.js";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;


app.use(cookieParser()); // for parsing cookies
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);



app.listen(PORT, () => {
	console.log("Server is running on port " + PORT);
});