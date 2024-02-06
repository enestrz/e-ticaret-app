import { PartyPopper } from "lucide-react";
import ProductItem from "./ui/ProductItem";
import { products } from "@/data/items"; // Importing the products from the data folder

export default function Home() {
    return (
        <main className=" ">
            <h2 className="sm:text-2xl font-semibold py-3 flex flex-row gap-2 items-center ">
                New Arrivals <PartyPopper className="size-6 stroke-warning" />
            </h2>
            <div className="w-full grid max-sm:place-content-center gap-3 lg:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => {
                    return (
                        <ProductItem
                            key={product.id}
                            {...product}
                        />
                    );
                })}
            </div>
        </main>
    );
}
