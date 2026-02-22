import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validate = <T extends z.ZodType>(schema: T) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({
                    error: 'Validation failed',
                    details: error.errors.map(e => ({
                        field: e.path.join('.'),
                        message: e.message,
                    })),
                });
            }
            next(error);
        }
    };
};

// Validation schemas
export const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    company: z.string().optional(),
    phone: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactInput = z.infer<typeof contactSchema>;
