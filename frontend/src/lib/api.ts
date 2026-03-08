const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

export async function sendContactForm(data: { name: string; email: string; message: string }) {
    const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to send message');
    }

    return response.json();
}

export async function fetchServices() {
    const response = await fetch(`${API_URL}/services`);
    if (!response.ok) throw new Error('Failed to fetch services');
    return response.json();
}

export async function fetchPortfolio() {
    const response = await fetch(`${API_URL}/portfolio`);
    if (!response.ok) throw new Error('Failed to fetch portfolio');
    return response.json();
}
