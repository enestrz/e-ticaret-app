import { PartyPopper } from "lucide-react";
import ProductItem from "./ui/ProductItem";
import { products } from "@/data/items"; // Importing the products from the data folder

export default function Home() {
    return (
        <main className="px-4 sm:px-10 sm:max-w-[1280px] sm:mx-auto ">
            <h2 className="sm:text-2xl font-semibold flex flex-row items-center ">
                New Arrivals <PartyPopper className="size-6 stroke-warning" />
            </h2>
            <div className="w-full max-w-full grid gap-3 place-items-center lg:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
