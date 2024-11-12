import { Request, Response } from "express";
import prisma from '../src/db/prisma.js';
import bcryptjs from "bcryptjs";
import generateToken from '../src/utils/generateToken.js';

export const signup = async (req: Request, res: Response) => {
	try {
        console.log(req.body);
		const { fullName, username, password, confirmPassword, gender } = req.body;

		if (!fullName || !username || !password || !confirmPassword || !gender) {
			return res.status(400).json({ error: "Please fill in all fields" });
		}

		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

		const user = await prisma.user.findUnique({ where: { username } });

		if (user) {
			return res.status(400).json({ error: "Username already exists" });
		}

		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);

		// https://avatar-placeholder.iran.liara.run/
		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

		const newUser = await prisma.user.create({
			data: {
				fullName,
				username,
				password: hashedPassword,
				gender,
				profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
			},
		});

		if (newUser) {
			// generate token in a sec
			generateToken(newUser.id, res);

			res.status(201).json({
				id: newUser.id,
				fullName: newUser.fullName,
				username: newUser.username,
				profilePic: newUser.profilePic,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error: any) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
export const login = async (req: Request, res: Response) => {
    try {
        const { username, password} = req.body;
        const user = await prisma.user.findUnique({ where: { username}});
        
    } catch (error) {
        
    }
}
export const logout = async (req: Request, res: Response) => {}