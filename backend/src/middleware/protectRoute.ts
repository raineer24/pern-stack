import { Request, Response, NextFunction} from 'express';
import jwt, { JwtPayload} from 'jsonwebtoken';
import prisma from '../db/prisma.js'

interface DecodedToken extends JwtPayload {
 userId: string;
}

const protectRoute = (req: Request, res: Response, next: NextFunction) => {
 try {
    const token = req.cookies.jwt;

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

    if(!decoded) {
        return res.status(401).json({ error: "Unauthorized - Invalid Token"})
    }

    const user = await prisma.user.findUnique({ where: { id: decoded.userId} });

    next()
 } catch (error) {
    
 }
}