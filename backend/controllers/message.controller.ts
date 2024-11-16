import { Request, Response } from "express";

export const sendMessage = async (req: Request, res: Response) => {
    try {
        const { message } = req.body;
    } catch (error: any) {
        console.log('Error in sendMessage',error.message);
        res.status(500).json({ error: 'Internal server error'});
    }
}