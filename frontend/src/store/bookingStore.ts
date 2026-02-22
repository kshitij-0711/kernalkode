
import { create } from 'zustand';

type Step = 'date' | 'time' | 'details' | 'success';

interface BookingState {
    step: Step;
    selectedDate: Date | null;
    selectedTime: string | null;
    formData: {
        name: string;
        email: string;
        topic: string;
    };
    setStep: (step: Step) => void;
    setSelectedDate: (date: Date | null) => void;
    setSelectedTime: (time: string | null) => void;
    setFormData: (data: Partial<BookingState['formData']>) => void;
    reset: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
    step: 'date',
    selectedDate: new Date(),
    selectedTime: null,
    formData: { name: '', email: '', topic: '' },
    setStep: (step) => set({ step }),
    setSelectedDate: (date) => set({ selectedDate: date }),
    setSelectedTime: (time) => set({ selectedTime: time }),
    setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
    reset: () => set({
        step: 'date',
        selectedDate: new Date(),
        selectedTime: null,
        formData: { name: '', email: '', topic: '' }
    }),
}));
