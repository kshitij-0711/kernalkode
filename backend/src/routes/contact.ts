import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma.js';
import { validate, contactSchema, ContactInput } from '../middleware/validation.js';

const router = Router();

// Submit contact form
router.post('/', validate(contactSchema), async (req: Request, res: Response) => {
    try {
        const data: ContactInput = req.body;

        const lead = await prisma.lead.create({
            data: {
                name: data.name,
                email: data.email,
                company: data.company,
                phone: data.phone,
                message: data.message,
            },
        });

        res.status(201).json({
            success: true,
            message: 'Thank you for contacting us! We will get back to you soon.',
            id: lead.id,
        });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to submit contact form. Please try again.',
        });
    }
});

// Get all leads (admin endpoint)
router.get('/', async (_req: Request, res: Response) => {
    try {
        const leads = await prisma.lead.findMany({
            orderBy: { createdAt: 'desc' },
        });
        res.json(leads);
    } catch (error) {
        console.error('Get leads error:', error);
        res.status(500).json({ error: 'Failed to fetch leads' });
    }
});

export default router;
