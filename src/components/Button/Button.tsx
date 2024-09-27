import styles from './Button.module.css';
import { ButtonProps } from './ButtonProps';

export default function Button({children, ...props} : ButtonProps) {
    return (
        <button className={styles.button}>{children}</button>
    )
}