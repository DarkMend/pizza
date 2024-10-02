import CardProduct from "../../components/CardProduct/CardProduct";
import Headling from "../../components/Headling/Headling";
import Search from "../../components/Search/Search";
import styles from './Menu.module.css';


export function Menu() {
    return (
        <>
            <div className={styles['head']}>
                <Headling>Меню</Headling>
                <Search placeholder="Введите блюдо или состав" />
            </div>
            <div className={styles['menu__wrapper']}>
                <CardProduct
                    id={1}
                    title="Наслаждение"
                    description="Салями, руккола, помидоры, оливки"
                    image="/img1.png"
                    raiting={4.5}
                    price={300}
                />
            </div>
        </>
    )
}