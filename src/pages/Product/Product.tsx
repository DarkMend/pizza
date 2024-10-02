import { useParams } from "react-router-dom";
import Headling from "../../components/Headling/Headling";

export function Product() {
    const {id} = useParams();

    return (
        <>
            <Headling>Продукт - {id}</Headling>
        </>
    );
}