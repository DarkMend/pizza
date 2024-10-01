import styles from './CardProduct.module.css'

export default function CardProduct() {
    return (
        <>
            <div className={styles['card-product']}>
                <div className={styles['card-image']}>
                    <div className={styles['card-image__head']}>
                        <div className={styles['price']}>
                            300 Р
                        </div>
                        <div className={styles['cart-image__cart']}>

                        </div>
                        <div className={styles['raiting']}>
                            
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}