import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://boringstudious.com'; // Replace with the actual production domain if different

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example of disallowed route
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
