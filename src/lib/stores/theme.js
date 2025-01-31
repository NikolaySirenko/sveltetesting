import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Get initial theme from localStorage or default to 'light'
const initialTheme = browser ? localStorage.getItem('theme') || 'light' : 'light';

// Create the theme store
export const theme = writable(initialTheme);

// Subscribe to theme changes and update localStorage
if (browser) {
    theme.subscribe(value => {
        localStorage.setItem('theme', value);
        document.documentElement.setAttribute('data-theme', value);
    });
}