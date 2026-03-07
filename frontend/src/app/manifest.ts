import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BoringStudious',
    short_name: 'BoringStudious',
    description: 'A full-stack landing page with stunning design variants for premium web development services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff', // adjust to your theme
    theme_color: '#000000', // adjust to your theme
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
