import CardProduct from "../../../components/CardProduct/CardProduct";
import { MenuListProps } from "./MenuList.props";
import styles from './MenuList.module.css'

export default function MenuList({ products }: MenuListProps) {
  return (
    <div className={styles['wrapper']}>
      {products.map((product) => (
        <CardProduct
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.ingredients.join(", ")}
          image={product.image}
          raiting={product.rating}
          price={product.price}
        />
      ))}
    </div>
  );
}