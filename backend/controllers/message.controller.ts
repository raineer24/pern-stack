import { Request, Response } from "express";
import prisma from "../src/db/prisma.js";

export const sendMessage = async (req: Request, res: Response) => {
    try {
        const { message } = req.body;
        const { id:receiverId } = req.params;
        const senderId = req.user.id;

        let conversation = await prisma.conversation.findFirst({
            where: {
                participantIds: {
                    hasEvery: [senderId, receiverId],
                }
            }
        });

        // the very first message is being sent, that's why we need to create new conversation
        if(!conversation) {
            conversation = await prisma.conversation.create({
                data: {
                    participantIds: {
                        set: [senderId, receiverId]
                    }
                }
            })
        }

        const newMessage = await prisma.message.create({
            data: {
                senderId,
                body: message,
                conversationId: conversation.id,
            }
        })

        if(newMessage) {
            conversation = await prisma.conversation.update({
                where: {
                    id: conversation.id
                },
                data: {
                    messages: {
                        connect: {
                            id: newMessage.id,
                        }
                    }
                }
            })
        }
    } catch (error: any) {
        console.log('Error in sendMessage',error.message);
        res.status(500).json({ error: 'Internal server error'});
    }
}