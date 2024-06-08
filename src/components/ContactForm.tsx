'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { cn } from '../lib/helpers';
import { Form as TForm, schema } from '../types';
import { StyledButton } from './Button';
import Form from './Form';

export default function ContactForm() {
    const [sent, setSent] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const { register, formState, handleSubmit, clearErrors, setError, reset } = useForm<TForm>({
        resolver: zodResolver(schema)
    });

    const submit = async (data: TForm) => {
        try {
            clearErrors();
            setSubmitting(true);

            const request = await fetch(`/api/contact`, {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify(data)
            });

            const response: { success: boolean } = await request.json();

            if (!response.success) {
                setError('root', {
                    message: 'There was a problem sending your enquiry, please try again.'
                });
                return;
            }

            reset();
            setSent(true);
        } catch (e) {
            setError('root', {
                message: 'There was a problem sending your enquiry, please try again.'
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            {!sent && (
                <Form onSubmit={handleSubmit(submit)}>
                    <p className='mb-6 text-center font-semibold'>
                        We aim to get back to you within 48 hours, please check your spam/junk for
                        our reply.
                    </p>
                    <div className='mb-8 space-y-8'>
                        <label htmlFor='name' className='block'>
                            <Title label='Name' required />
                            <input
                                type='text'
                                id='name'
                                required
                                placeholder='Your full name here...'
                                {...register('name')}
                                className={cn(
                                    'block w-full border-2 outline-none',
                                    formState.errors.name ? 'border-peach-dark' : 'border-gray'
                                )}
                            />
                            {!!formState.errors.name && (
                                <Error message={formState.errors.name.message} />
                            )}
                        </label>

                        <label htmlFor='partner' className='block'>
                            <Title label='Partners name' required />
                            <input
                                type='text'
                                id='partner'
                                required
                                placeholder='Your partners full name here...'
                                {...register('partner')}
                                className={cn(
                                    'block w-full border-2 outline-none',
                                    formState.errors.name ? 'border-peach-dark' : 'border-gray'
                                )}
                            />
                            {!!formState.errors.partner && (
                                <Error message={formState.errors.partner.message} />
                            )}
                        </label>

                        <label htmlFor='email' className='block'>
                            <Title label='Email' required />
                            <input
                                type='email'
                                id='email'
                                {...register('email')}
                                placeholder='Your email here...'
                                className={cn(
                                    'block w-full border-2',
                                    formState.errors.email ? 'border-peach-dark' : 'border-gray'
                                )}
                            />
                            {!!formState.errors.email && (
                                <Error message={formState.errors.email.message} />
                            )}
                        </label>

                        <label htmlFor='phone' className='block'>
                            <Title label='Phone number' required />
                            <input
                                type='tel'
                                id='phone'
                                {...register('phone')}
                                placeholder='Your number here...'
                                className={cn(
                                    'block w-full border-2',
                                    formState.errors.phone ? 'border-peach-dark' : 'border-gray'
                                )}
                            />
                            {!!formState.errors.phone && (
                                <Error message={formState.errors.phone.message} />
                            )}
                        </label>

                        <label htmlFor='address' className='block'>
                            <Title label='Event Address' />
                            <input
                                type='text'
                                id='address'
                                {...register('address')}
                                placeholder='Your events full address'
                                className={cn(
                                    'block w-full border-2',
                                    formState.errors.address ? 'border-peach-dark' : 'border-gray'
                                )}
                            />
                            {!!formState.errors.address && (
                                <Error message={formState.errors.address.message} />
                            )}
                        </label>

                        <label htmlFor='date' className='block'>
                            <Title label='Event date' />
                            <input
                                type='date'
                                id='date'
                                {...register('date')}
                                className={cn(
                                    'block w-full border-2',
                                    formState.errors.date ? 'border-peach-dark' : 'border-gray'
                                )}
                            />
                            {!!formState.errors.date && (
                                <Error message={formState.errors.date.message} />
                            )}
                        </label>

                        <label htmlFor='message' className='block'>
                            <Title label='Additional information' />
                            <textarea
                                id='message'
                                rows={8}
                                {...register('message')}
                                placeholder='Additional information...'
                                className={cn(
                                    'block w-full border-2',
                                    formState.errors.message ? 'border-peach-dark' : 'border-gray'
                                )}
                            />
                            {!!formState.errors.message && (
                                <Error message={formState.errors.message.message} />
                            )}
                        </label>
                    </div>
                    {!!formState.errors.root && (
                        <span className='block text-center font-medium text-peach-dark'>
                            {formState.errors.root.message}
                        </span>
                    )}
                    <StyledButton
                        type='submit'
                        className='ml-auto mr-0 flex bg-black text-white'
                        disabled={submitting}
                    >
                        {submitting ? 'Sending...' : 'Send'}
                    </StyledButton>
                </Form>
            )}

            {sent && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <p className='text-center font-semibold'>
                        Thank you for submitting your enquiry, dont forget to check your spam/junk
                        for our reply!
                    </p>
                </motion.div>
            )}
        </>
    );
}

function Title({ label, required }: { label: string; required?: boolean }) {
    return (
        <span className='mb-2 block'>
            {label} {required && <span className='text-xl text-peach-default'>*</span>}
        </span>
    );
}

function Error({ message }: { message?: string }) {
    return <span className='my-2 block text-right font-semibold text-peach-dark'>{message}</span>;
}
