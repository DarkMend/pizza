import { HeadlingProps } from "./Headling.props";
import cn from 'classnames';
import styles from './Headling.module.css';

export default function Headling({ children, className,...props}: HeadlingProps) {
    return (
        <h1 {...props} className={cn( styles.h1 ,className)}>
            {children}
        </h1>
    )
}