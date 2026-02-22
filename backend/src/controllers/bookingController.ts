
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const bookingSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    date: z.string().or(z.date()), // Receive as string from JSON
    timeSlot: z.string().min(1, "Time slot is required"),
    topic: z.string().optional(),
});

export const createBooking = async (req: Request, res: Response) => {
    try {
        const validatedData = bookingSchema.parse(req.body);

        // @ts-ignore
        const booking = await prisma.booking.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                date: new Date(validatedData.date),
                timeSlot: validatedData.timeSlot,
                topic: validatedData.topic,
                status: 'PENDING'
            }
        });

        res.status(201).json(booking);
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ error: error.errors });
        } else {
            console.error('Error creating booking:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};
