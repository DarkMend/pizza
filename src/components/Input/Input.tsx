import cn from 'classnames';
import styles from './Input.module.css';

export default function Input() {
    return (
        <input type="text" className={cn(styles.input)} />
    )
}