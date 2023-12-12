import { FormEventHandler, FormHTMLAttributes, PropsWithChildren, forwardRef, useRef } from 'react';
import { cn } from '../lib/helpers';
import HoneyPot from './HoneyPot';

const Form = forwardRef<
    HTMLFormElement,
    { honeypot?: boolean } & FormHTMLAttributes<HTMLFormElement> & PropsWithChildren
>(({ honeypot, className, children, onSubmit, ...rest }, ref) => {
    const protectionRef = useRef<HTMLInputElement>(null);

    const submit = (e: FormEventHandler<HTMLFormElement> | undefined) => {
        if (protectionRef.current?.value) return undefined;
        return e;
    };

    return (
        <form ref={ref} {...rest} onSubmit={submit(onSubmit)} className={cn('', className)}>
            <HoneyPot ref={protectionRef} />
            {children}
        </form>
    );
});

Form.displayName = 'Form';

export default Form;
