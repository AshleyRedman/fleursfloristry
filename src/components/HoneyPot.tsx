import { InputHTMLAttributes, forwardRef } from 'react';

const HoneyPot = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((_, ref) => (
    <input
        ref={ref}
        type='text'
        id='form-protection'
        tabIndex={-1}
        aria-hidden
        className='sr-only'
    />
));

HoneyPot.displayName = 'HoneyPot';

export default HoneyPot;
