import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma.js';

const router = Router();

// Get all active services
router.get('/', async (_req: Request, res: Response) => {
    try {
        const services = await prisma.service.findMany({
            where: { isActive: true },
            orderBy: { order: 'asc' },
        });
        res.json(services);
    } catch (error) {
        console.error('Get services error:', error);
        res.status(500).json({ error: 'Failed to fetch services' });
    }
});

// Get single service by ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const service = await prisma.service.findUnique({
            where: { id: req.params.id },
        });

        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }

        res.json(service);
    } catch (error) {
        console.error('Get service error:', error);
        res.status(500).json({ error: 'Failed to fetch service' });
    }
});

export default router;
