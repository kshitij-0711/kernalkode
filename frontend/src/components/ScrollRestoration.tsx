'use client';
import { useEffect } from 'react';

export default function ScrollRestoration() {
    useEffect(() => {
        // Prevent browser from automatically restoring scroll position to the #hash
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        // Force scroll to top on mount
        window.scrollTo(0, 0);

        // Optionally, remove the hash from the URL without triggering a navigation
        // if we want the URL to be super clean on reload, but just preventing scroll is enough.
        // if (window.location.hash) {
        //     window.history.replaceState(null, '', window.location.pathname);
        // }
    }, []);

    return null;
}
