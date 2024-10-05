import { Await, useLoaderData } from "react-router-dom";
import Headling from "../../components/Headling/Headling";
import { IProduct } from "../../interfaces/product.interface";
import { Suspense } from "react";

export function Product() {
    const data = useLoaderData() as { data: IProduct };

    return (
        <>
            <Suspense fallback={'Загружаю'}>
                <Await resolve={data.data}>
                    {({ data }: { data: IProduct }) => (
                        <Headling>Продукт - {data.name}</Headling>
                    )}
                </Await>
            </Suspense>
        </>
    );
}