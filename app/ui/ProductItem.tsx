import Image from "next/image";
import { Bookmark, Heart, StarIcon } from "lucide-react";
import Link from "next/link";
import { Product } from "@/data/items";

const ProductItem: React.FC<Product> = ({
    id,
    name,
    brand,
    price,
    rating,
    image,
    numReviews,
    stock,
}) => {
    return (
        <div className="relative flex flex-col gap-y-2 items-center rounded-lg w-[270px] h-[350px] shadow-lg bg-[#232323] p-2">
            <Link
                href={`/products/${id}`}
                className="h-[250px] w-full relative"
            >
                <Image
                    src={image}
                    alt={"Laptop"}
                    fill
                    sizes="100"
                    priority={true}
                    className="object-cover rounded-lg"
                />
            </Link>

            <div className="p-2 flex flex-col gap-3 justify-between w-full flex-1">
                <Link
                    href={`/products/${id}`}
                    title={name}
                    className="font-medium truncate "
                >
                    {name}
                </Link>

                {/* Brand Link */}
                <div className="flex flex-row justify-between items-center">
                    <Link
                        href={`/brand/${brand.toLowerCase()}`}
                        className="bg-white text-black rounded-3xl px-2 text-[14px] font-semibold"
                    >
                        {brand}
                    </Link>
                    <small className="font-semibold text-[14px]">
                        $ {price}
                    </small>
                </div>

                {/* Rating and reviews */}
                <div className="flex flex-row items-center justify-start gap-1">
                    <StarIcon className="size-4 fill-warning stroke-warning" />
                    <small>
                        {rating} by {numReviews}
                        {numReviews > 1 ? "reviews" : "review"}
                    </small>
                </div>

                {/* Stock */}
                <div>
                    <small>
                        {stock ? `In stock: ${stock}` : "Out of stock"}
                    </small>
                </div>

                {/* Add to cart button */}
                {/* <div className="flex flex-col">
                    <button className="text-sm font-medium bg-primary rounded-lg py-[4px] hover:bg-primary/80 active:scale-95 ">
                        Add to cart
                    </button>
                </div> */}
            </div>

            {/* Add to favorite button */}
            <button className="inline-flex items-center justify-center appearance-none absolute top-3 right-3 group hover:bg-white/85 transition-colors rounded-full p-1">
                <Bookmark className="group-hover:stroke-black group-active:stroke-red-600 group-active:fill-red-600 transition-colors" />
            </button>
        </div>
    );
};
export default ProductItem;

// Link href={`/products/${id}`}
