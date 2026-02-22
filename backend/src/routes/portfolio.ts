import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma.js';

const router = Router();

// Get all active portfolio items
router.get('/', async (req: Request, res: Response) => {
    try {
        const { category } = req.query;

        const portfolio = await prisma.portfolioItem.findMany({
            where: {
                isActive: true,
                ...(category && { category: String(category) }),
            },
            orderBy: { order: 'asc' },
        });
        res.json(portfolio);
    } catch (error) {
        console.error('Get portfolio error:', error);
        res.status(500).json({ error: 'Failed to fetch portfolio' });
    }
});

// Get portfolio categories
router.get('/categories', async (_req: Request, res: Response) => {
    try {
        const categories = await prisma.portfolioItem.findMany({
            where: { isActive: true },
            select: { category: true },
            distinct: ['category'],
        });
        res.json(categories.map(c => c.category));
    } catch (error) {
        console.error('Get categories error:', error);
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
});

export default router;
