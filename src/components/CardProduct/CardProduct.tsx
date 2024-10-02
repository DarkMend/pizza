import { Link } from 'react-router-dom'
import styles from './CardProduct.module.css'
import { CardProductProps } from './CardProduct.props'

export default function CardProduct(props: CardProductProps) {
    return (
        <>
            <Link to={`/product/${props.id}`}>
                <div className={styles['card-product']}>
                    <div className={styles['card-head']} style={
                        {
                            backgroundImage: `url('${props.image}')`
                        }
                    }>
                        <div className={styles['card-head__wrapper']}>
                            <div className={styles['price']}>
                                {props.price} <span style={{ color: `#FE724C` }}>₽</span>
                            </div>
                            <div className={styles['cart-image__cart']}>
                                <button className={styles['cart-button']}>
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
                            {props.title}
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