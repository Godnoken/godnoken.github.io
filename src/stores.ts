import { writable } from 'svelte/store'

export const activeCard = writable("none");

export const xIn = writable(0);
export const xOut = writable(0);

export const currentIndex = writable(1);