import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        NODE_ENV: z.union([z.literal('development'), z.literal('production')]),
        STAGE: z.union([z.literal('development'), z.literal('production')]),
        TZ: z.string().min(1),
        IS_LOCAL: z.literal('true').optional(),
        DEV_MAIL_HOST: z.string().optional(),
        DEV_MAIL_PORT: z.string().optional(),
        SMTP_FROM: z.string().min(1),
        SENDGRID_API_KEY: z.string().nonempty(),
        MAIL_TO: z.string().nonempty()
    },
    client: {},
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        STAGE: process.env.STAGE,
        TZ: process.env.TZ,
        IS_LOCAL: process.env.IS_LOCAL,
        DEV_MAIL_HOST: process.env.DEV_MAIL_HOST,
        DEV_MAIL_PORT: process.env.DEV_MAIL_PORT,
        SMTP_FROM: process.env.SMTP_FROM,
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
        MAIL_TO: process.env.MAIL_TO
    }
});
