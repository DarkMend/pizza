import Headling from "../../components/Headling/Headling";
import Search from "../../components/Search/Search";
import styles from "./Menu.module.css";
import { PREFIX } from "../../helpers/API";
import { IProduct } from "../../interfaces/product.interface";
import { ChangeEvent, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import MenuList from "./MenuList/MenuList";

export default function Menu() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    getProducts(filter);
  }, [filter])

  const getProducts = async (name?: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<IProduct[]>(`${PREFIX}/products`, {
        params: {
          name
        }
      });
      setProducts(data);
      setIsLoading(false);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.message);
      }
      console.error(e);
      setIsLoading(false);
    }
  };

  const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  return (
    <>
      <div className={styles["head"]}>
        <Headling>Меню</Headling>
        <Search placeholder="Введите блюдо или состав" onChange={updateFilter} />
      </div>
      <div>
        {error && <div>{error}</div>}
        {!isLoading && products.length > 0 && <MenuList products={products} />}
        {isLoading && <div>Загрузка меню...</div>}
        {!isLoading && products.length === 0 && <div>Не найдено</div>}

      </div>
    </>
  );
}
