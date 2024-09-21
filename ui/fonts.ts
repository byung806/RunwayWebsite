import { Noto_Sans } from 'next/font/google';
import { Lato } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Fredoka } from 'next/font/google';
 
export const notosans = Noto_Sans({
    weight: ['400', '700'],
    subsets: ['latin']
});

export const lato = Lato({
    weight: ['400', '700'],
    subsets: ['latin']
});

export const inter = Inter({
    weight: ['400', '700'],
    subsets: ['latin']
});

export const fredoka = Fredoka({
    weight: ['600', '700'],
    subsets: ['latin']
});