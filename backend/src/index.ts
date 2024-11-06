import express from "express";
const app = express();


import authRoutes from "../routes/auth.route.js";
import messageRoutes from "../routes/message.route.js";




app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);




app.listen(3000, () => {
	console.log("Server is running on port 3000");
});