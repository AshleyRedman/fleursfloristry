'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { StyledButton } from './Button';
import { twMerge } from 'tailwind-merge';

const schema = z
    .object({
        name: z.string().min(1, 'Name must be at least one character.'),
        email: z.string().email().min(1, { message: 'Please provide a valid email address.' }),
        phone: z.string().min(1, { message: 'Please provide a valid phone number.' }),
        address: z.string().optional(),
        date: z.date().optional(),
        message: z.string().optional()
    })
    .strict();

type Form = z.infer<typeof schema>;

export default function ContactForm() {
    const [submitting, setSubmitting] = useState(false);
    const { register, formState, handleSubmit, clearErrors, setError } = useForm<Form>({
        resolver: zodResolver(schema)
    });

    const submit = (data: Form) => {
        try {
            clearErrors();
            setSubmitting(true);

            // send
        } catch (e) {
            setError('root', {
                message: 'There was a problem sending your enquiry, please try again.'
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)} className=''>
            {!!formState.errors.root && <span>{formState.errors.root.message}</span>}
            <div className='space-y-8 mb-8'>
                <label htmlFor='name' className='block'>
                    <Title label='Name' required />
                    <input
                        type='text'
                        id='name'
                        required
                        placeholder='Your full name here...'
                        {...register('name')}
                        className={twMerge(
                            'block w-full border-2 outline-none',
                            formState.errors.name ? 'border-peach-dark' : 'border-gray'
                        )}
                    />
                    {!!formState.errors.name && <Error message={formState.errors.name.message} />}
                </label>

                <label htmlFor='email' className='block'>
                    <Title label='Email' required />
                    <input
                        type='email'
                        id='email'
                        {...register('email')}
                        placeholder='Your email here...'
                        className={twMerge(
                            'block w-full border-2',
                            formState.errors.email ? 'border-peach-dark' : 'border-gray'
                        )}
                    />
                    {!!formState.errors.email && <Error message={formState.errors.email.message} />}
                </label>

                <label htmlFor='phone' className='block'>
                    <Title label='Phone number' required />
                    <input
                        type='tel'
                        id='phone'
                        {...register('phone')}
                        placeholder='Your number here...'
                        className={twMerge(
                            'block w-full border-2',
                            formState.errors.phone ? 'border-peach-dark' : 'border-gray'
                        )}
                    />
                    {!!formState.errors.phone && <Error message={formState.errors.phone.message} />}
                </label>

                <label htmlFor='address' className='block'>
                    <Title label='Event Address' />
                    <input
                        type='text'
                        id='address'
                        {...register('address')}
                        placeholder='Your events full address'
                        className={twMerge(
                            'block w-full border-2',
                            formState.errors.address ? 'border-peach-dark' : 'border-gray'
                        )}
                    />
                    {!!formState.errors.address && <Error message={formState.errors.address.message} />}
                </label>

                <label htmlFor='date' className='block'>
                    <Title label='Event date' />
                    <input
                        type='date'
                        id='date'
                        {...register('date')}
                        className={twMerge(
                            'block w-full border-2',
                            formState.errors.date ? 'border-peach-dark' : 'border-gray'
                        )}
                    />
                    {!!formState.errors.date && <Error message={formState.errors.date.message} />}
                </label>

                <label htmlFor='message' className='block'>
                    <Title label='Event date' />
                    <textarea
                        id='message'
                        rows={8}
                        {...register('date')}
                        placeholder='Additional information...'
                        className={twMerge(
                            'block w-full border-2',
                            formState.errors.message ? 'border-peach-dark' : 'border-gray'
                        )}
                    />
                    {!!formState.errors.message && <Error message={formState.errors.message.message} />}
                </label>
            </div>
            <StyledButton type='submit' className='bg-black text-white flex ml-auto mr-0' disabled={submitting}>
                {submitting ? 'Sending...' : 'Send'}
            </StyledButton>
        </form>
    );
}

function Title({ label, required }: { label: string; required?: boolean }) {
    return (
        <span className='mb-2 block'>
            {label} {required && <span className='text-peach-default text-xl'>*</span>}
        </span>
    );
}

function Error({ message }: { message?: string }) {
    return <span className='block my-2 text-peach-dark font-semibold text-right'>{message}</span>;
}
