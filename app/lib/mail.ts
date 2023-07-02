import { env } from '@/app/lib/env';
import { createTransport, SendMailOptions, SentMessageInfo } from 'nodemailer';
import sendGrid from 'nodemailer-sendgrid';

const transporter = () => {
    let config = {};

    switch (env.STAGE) {
        case 'production': {
            config = sendGrid({
                apiKey: env.SENDGRID_API_KEY
            });
            break;
        }
        case 'development': {
            if (env.IS_LOCAL) {
                config = {
                    host: env.DEV_MAIL_HOST,
                    port: env.DEV_MAIL_PORT
                };
            } else {
                config = sendGrid({
                    apiKey: env.SENDGRID_API_KEY
                });
            }
            break;
        }
    }

    const transport = createTransport(config);

    return {
        transport,
        sender: env.SMTP_FROM
    };
};

export const send = async (
    options: {
        html: string;
        text: string;
        subject: string;
        to: string[];
    } & SendMailOptions
): Promise<{ success: boolean; request: SentMessageInfo }> => {
    const { transport, sender } = transporter();

    const request = await transport.sendMail({
        ...options,
        from: sender,
        sender: sender,
        replyTo: sender
    });

    let success: boolean = true;

    if (request.rejected) {
        success = false;
    }

    return { success, request };
};

const basecss = `font-family: sans-serif;`;

const H1 = (value: string) => `<h1 style="${basecss} font-size: 14px;">${value}</h1>`;

const H2 = (value: string) => `<h2 style="${basecss} font-size: 14px;">${value}</h2>`;

const small = (value: string) => `<small style="${basecss} font-size: 12px;">${value}</small>`;

export const base = ({ body, subject }: { body: string; subject: string }) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${subject}</title>
</head>
<body>
<header>${H2('Fleurs Floristry')}</header>
<main>
${body}
</main>
<footer>
${small(`Fleurs Floristry.com`)}
</footer>
</body>
</html>
`;
