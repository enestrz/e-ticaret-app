import ProductItem from "./ui/ProductItem";
import { products } from "@/data/items"; // Importing the products from the data folder

export default function Home() {
    return (
        <main className="p-24 grid grid-flow-col auto-cols-min gap-4 ">
            {products.map((product) => {
                return (
                    <ProductItem
                        key={product.id}
                        {...product}
                    />
                );
            })}
        </main>
    );
}
