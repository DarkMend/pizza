import styles from './Button.module.css';
import { ButtonProps } from './ButtonProps';

export default function Button({children, className, ...props} : ButtonProps) {
    return (
        <button className={styles.button} {...props}>{children}</button>
    )
}