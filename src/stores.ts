import { writable } from 'svelte/store'

export const activeCard = writable("none");

export const xIn = writable(0);
export const xOut = writable(0);

export const currentIndex = writable(1);

export const windowWidth = writable(0);

export const mouseX = writable(0);
export const mouseY = writable(0);

export const darkMode = writable(true);