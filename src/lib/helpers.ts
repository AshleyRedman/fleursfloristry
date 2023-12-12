import { twMerge } from 'tailwind-merge';
import { Stage } from '../types';

export const cn = (...args: Array<string | undefined | false>): string => {
    return twMerge(args);
};

export const canonical = (stage: Stage): string => {
    switch (stage) {
        case 'production':
            return 'https://fleursfloristry.com';

        case 'development':
        case 'preview':
            return `https://${process.env.VERCEL_URL}`;

        case 'local':
            return `http://localhost:${process.env.PORT || 3000}`;
    }
};
