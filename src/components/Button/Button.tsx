import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames'

export default function Button({children, className, appearence, ...props} : ButtonProps) {
    return (
        <button className={cn(styles['button'], className, {
            [styles['button-small']]: appearence === 'small',
            [styles['button-big']]: appearence === 'big'
        })} {...props}>{children}</button>
    )
}