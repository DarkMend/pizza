import cn from 'classnames';
import styles from './Input.module.css';
import { forwardRef } from 'react';
import { InputProps } from './Input.props';

const Input =  forwardRef<HTMLInputElement,  InputProps>(function Input({isValid = true, className, ...props}, ref) {
    return (
        <input ref={ref} type="text" className={cn(styles.input, className)} {...props}/>
    )
});

export default Input;