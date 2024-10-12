import { Link } from 'react-router-dom'
import styles from './CardProduct.module.css'
import { CardProductProps } from './CardProduct.props'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

export default function CardProduct(props: CardProductProps) {

    const dispatch = useDispatch<AppDispatch>();

    const add = (event: MouseEvent) => {
        event.preventDefault();
        dispatch(cartActions.add(props.id))
    }

    return (
        <>
            <Link to={`/product/${props.id}`}>
                <div className={styles['card-product']}>
                    <div className={styles['card-head']} style={
                        {
                            backgroundImage: `url('${props.image}')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }
                    }>
                        <div className={styles['card-head__wrapper']}>
                            <div className={styles['price']}>
                                {props.price} <span style={{ color: `#FE724C` }}>₽</span>
                            </div>
                            <div className={styles['cart-image__cart']}>
                                <button className={styles['cart-button']} onClick={add}>
                                    <img src="/cart1.svg" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className={styles['raiting']}>
                            <p>{props.raiting}</p>
                            <img src="/star.svg" alt="" />
                        </div>
                    </div>
                    <div className={styles['card-info']}>
                        <p className={styles['title']}>
                            {props.name}
                        </p>
                        <p className={styles['text']}>
                            {props.description}
                        </p>
                    </div>
                </div>
            </Link>
        </>
    )
}