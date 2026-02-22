import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // Seed Services
    const services = [
        {
            title: 'Custom Website Development',
            description: 'Bespoke websites tailored to your brand identity and business goals. From single-page portfolios to complex e-commerce platforms.',
            icon: 'code',
            features: ['Responsive Design', 'SEO Optimized', 'Performance Focused', 'CMS Integration'],
            order: 1,
        },
        {
            title: 'E-Commerce Solutions',
            description: 'Powerful online stores that convert visitors into customers. Complete with payment processing, inventory management, and analytics.',
            icon: 'shopping-cart',
            features: ['Secure Payments', 'Inventory Management', 'Order Tracking', 'Analytics Dashboard'],
            order: 2,
        },
        {
            title: 'Web Application Development',
            description: 'Scalable web applications built with modern technologies. From MVPs to enterprise solutions.',
            icon: 'layers',
            features: ['Cloud Infrastructure', 'API Development', 'Real-time Features', 'Third-party Integrations'],
            order: 3,
        },
        {
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces that delight users. Research-driven design that converts.',
            icon: 'palette',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
            order: 4,
        },
        {
            title: 'Website Maintenance',
            description: 'Keep your site secure, fast, and up-to-date. Ongoing support and optimization services.',
            icon: 'shield',
            features: ['Security Updates', 'Performance Monitoring', 'Content Updates', '24/7 Support'],
            order: 5,
        },
        {
            title: 'SEO & Digital Marketing',
            description: 'Get found online and grow your business. Data-driven strategies that deliver results.',
            icon: 'trending-up',
            features: ['Keyword Research', 'On-page SEO', 'Content Strategy', 'Analytics & Reporting'],
            order: 6,
        },
    ];

    for (const service of services) {
        await prisma.service.upsert({
            where: { id: service.title.toLowerCase().replace(/\s+/g, '-') },
            update: service,
            create: { ...service, id: service.title.toLowerCase().replace(/\s+/g, '-') },
        });
    }

    // Seed Testimonials
    const testimonials = [
        {
            id: 'testimonial-1',
            name: 'Sarah Chen',
            company: 'Bloom Botanics',
            role: 'Founder & CEO',
            quote: 'WebCraft transformed our online presence completely. Our new e-commerce site increased conversions by 340% in the first quarter. Their attention to detail and understanding of our brand was exceptional.',
            rating: 5,
        },
        {
            id: 'testimonial-2',
            name: 'Marcus Johnson',
            company: 'TechFlow Solutions',
            role: 'CTO',
            quote: 'Working with WebCraft was a game-changer. They built our SaaS dashboard from scratch and delivered ahead of schedule. The code quality and documentation were impeccable.',
            rating: 5,
        },
        {
            id: 'testimonial-3',
            name: 'Elena Rodriguez',
            company: 'Artisan Coffee Co.',
            role: 'Marketing Director',
            quote: 'The website they created for us perfectly captures our brand essence. Our customers constantly compliment the beautiful design and seamless ordering experience.',
            rating: 5,
        },
        {
            id: 'testimonial-4',
            name: 'David Park',
            company: 'Velocity Fitness',
            role: 'Owner',
            quote: 'From concept to launch in just 6 weeks! The booking system they built has streamlined our operations significantly. Highly recommend their team.',
            rating: 5,
        },
    ];

    for (const testimonial of testimonials) {
        await prisma.testimonial.upsert({
            where: { id: testimonial.id },
            update: testimonial,
            create: testimonial,
        });
    }

    // Seed Portfolio Items
    const portfolioItems = [
        {
            id: 'portfolio-1',
            title: 'Bloom Botanics',
            description: 'A stunning e-commerce platform for a premium plant retailer featuring 3D product visualization.',
            imageUrl: '/portfolio/bloom-botanics.jpg',
            projectUrl: 'https://bloombotanics.example.com',
            category: 'E-Commerce',
            tags: ['Next.js', 'Shopify', 'Three.js'],
            order: 1,
        },
        {
            id: 'portfolio-2',
            title: 'TechFlow Dashboard',
            description: 'Enterprise SaaS dashboard with real-time analytics, team collaboration, and automated reporting.',
            imageUrl: '/portfolio/techflow.jpg',
            projectUrl: 'https://techflow.example.com',
            category: 'Web Application',
            tags: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
            order: 2,
        },
        {
            id: 'portfolio-3',
            title: 'Artisan Coffee Co.',
            description: 'Brand website with integrated online ordering and subscription management.',
            imageUrl: '/portfolio/artisan-coffee.jpg',
            projectUrl: 'https://artisancoffee.example.com',
            category: 'E-Commerce',
            tags: ['Next.js', 'Stripe', 'Sanity CMS'],
            order: 3,
        },
        {
            id: 'portfolio-4',
            title: 'Velocity Fitness',
            description: 'Fitness studio website with class booking, membership management, and trainer profiles.',
            imageUrl: '/portfolio/velocity-fitness.jpg',
            projectUrl: 'https://velocityfitness.example.com',
            category: 'Website',
            tags: ['Next.js', 'Prisma', 'Stripe'],
            order: 4,
        },
        {
            id: 'portfolio-5',
            title: 'Aurora Real Estate',
            description: 'Property listing platform with virtual tours, mortgage calculator, and agent matching.',
            imageUrl: '/portfolio/aurora-realestate.jpg',
            projectUrl: 'https://aurora-realestate.example.com',
            category: 'Web Application',
            tags: ['React', 'Node.js', 'MongoDB', 'Mapbox'],
            order: 5,
        },
        {
            id: 'portfolio-6',
            title: 'Mindful Wellness',
            description: 'Health and wellness platform with course marketplace and community features.',
            imageUrl: '/portfolio/mindful-wellness.jpg',
            projectUrl: 'https://mindful-wellness.example.com',
            category: 'Website',
            tags: ['Next.js', 'Stripe', 'Video Streaming'],
            order: 6,
        },
    ];

    for (const item of portfolioItems) {
        await prisma.portfolioItem.upsert({
            where: { id: item.id },
            update: item,
            create: item,
        });
    }

    console.log('✅ Database seeded successfully!');
}

main()
    .catch((e) => {
        console.error('Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
