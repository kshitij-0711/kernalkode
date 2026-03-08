
import { useMutation } from '@tanstack/react-query';
import { useBookingStore } from '@/store/bookingStore';

interface BookingData {
    name: string;
    email: string;
    date: Date;
    timeSlot: string;
    topic?: string;
}

export const useCreateBooking = () => {
    const { setStep } = useBookingStore();

    return useMutation({
        mutationFn: async (data: BookingData) => {
            const response = await fetch('http://localhost:5001/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Booking failed');
            }

            return response.json();
        },
        onSuccess: () => {
            setStep('success');
        },
        onError: (error) => {
            console.error('Booking error:', error);
            alert('Something went wrong. Please try again.');
        }
    });
};
