import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma.js';

const router = Router();

// Get all active testimonials
router.get('/', async (_req: Request, res: Response) => {
    try {
        const testimonials = await prisma.testimonial.findMany({
            where: { isActive: true },
            orderBy: { createdAt: 'desc' },
        });
        res.json(testimonials);
    } catch (error) {
        console.error('Get testimonials error:', error);
        res.status(500).json({ error: 'Failed to fetch testimonials' });
    }
});

export default router;
