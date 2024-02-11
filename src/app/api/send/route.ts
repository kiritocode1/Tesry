import { EmailTemplate } from '@/components/email-tempelate';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request) {
    try {
        const { email } = await req.json();
        console.log(email);
    const { data, error } = await resend.emails.send({
      from: 'Acme <noreply@tesry.co>',
      to: [email],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "user  from tesry" }) as React.ReactElement,
    });

    if (error) {
      console.log(error);
      return Response.json({ error });

    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}