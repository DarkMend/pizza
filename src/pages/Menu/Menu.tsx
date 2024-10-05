import Headling from "../../components/Headling/Headling";
import Search from "../../components/Search/Search";
import styles from "./Menu.module.css";
import { PREFIX } from "../../helpers/API";
import { IProduct } from "../../interfaces/product.interface";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import MenuList from "./MenuList/MenuList";

export default function Menu() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<IProduct[]>(`${PREFIX}/products`);
      setProducts(data);
      setIsLoading(false);
    } catch (e) {
      if(e instanceof AxiosError){
        setError(e.message);
      }
      console.error(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className={styles["head"]}>
        <Headling>Меню</Headling>
        <Search placeholder="Введите блюдо или состав" />
      </div>
      <div>
        {error && <div>{error}</div>}
        {!isLoading && <MenuList products={products} /> }
        {isLoading && <div>Загрузка меню...</div>}
      </div>
    </>
  );
}
