import { env } from '@/src/lib/env';
import { Form } from '@/src/types';
import { NextResponse } from 'next/server';
import { base, send } from '../../../lib/mail';

export async function POST(request: Request) {
    try {
        const to = env.MAIL_TO;
        const { name, partner, email, phone, address, date, message }: Form = await request.json();
        const subject = `Contact form submission from ${email}`;

        const nameRow = `<tr><td>Name: </td><td>${name}</td></tr>`;
        const partnerRow = `<tr><td>Partner: </td><td>${partner}</td></tr>`;
        const emailRow = `<tr><td>Email: </td><td>${email}</td></tr>`;
        const phoneRow = `<tr><td>Phone: </td><td>${phone}</td></tr>`;
        const addressRow = address ? `<tr><td>Address: </td><td>${address}</td></tr>` : '';
        const dateRow = date ? `<tr><td>Date: </td><td>${date}</td></tr>` : '';
        const messageRow = message ? `<tr><td>Message: </td><td>${message}</td></tr>` : '';

        const html = base({
            body: `<table>${nameRow}${partnerRow}${emailRow}${phoneRow}${addressRow}${dateRow}${messageRow}</table>`,
            subject
        });

        const text = `Name: ${name}, Partner: ${partner}, Email: ${email}, Phone: ${phone}, Address: ${address}, Event date: ${date}, Message: ${message}`;
        const mailerResponse: { success: boolean; request: { accepted: string[] } } = await send({
            html,
            text,
            subject,
            to: [to]
        });

        if (!mailerResponse.success) {
            throw new Error('Email failed to send.');
        }

        return new NextResponse(JSON.stringify({ success: true }), {
            status: 200
        });
    } catch (e) {
        return new NextResponse(JSON.stringify({ success: false }), {
            status: 500
        });
    }
}
