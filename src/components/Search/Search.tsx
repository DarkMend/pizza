import { forwardRef } from 'react';
import styles from './Search.module.css';
// import cn from 'classnames'
import { SearchProps } from './Search.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Search({...props}, ref) {
    return (
        <>
            <div className={styles['search']}>
                <img src="/search.svg" alt="" />
                <input ref={ref} type="text" {...props} className={styles['input']}/>
            </div>
        </>
    )
})

export default Search;
