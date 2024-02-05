"use client";

import Image from "next/image";
import { Bookmark, Heart } from "lucide-react";
import { useState } from "react";

const ProductItem = () => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    return (
        <section className="relative inline-flex flex-col gap-y-2 items-center rounded-lg overflow-hidden w-[250px] h-[350px] shadow-lg bg-[#232323] p-2">
            <Image
                src={"https://images.pexels.com/photos/18104/pexels-photo.jpg"}
                alt={"Laptop"}
                width={250}
                height={250}
                priority={true}
                className="object-contain w-full"
            />
            <div className="p-2 flex flex-col gap-3 justify-between flex-1">
                <h5 className="font-medium text-base ">
                    Apple Macbook Pro 13 inch 16 GB ram 512 GB storage
                </h5>

                {/* Brand Link */}
                <div className="flex flex-row justify-between items-center">
                    <span className="bg-white text-black rounded-3xl px-2 text-[14px] font-semibold">
                        Apple
                    </span>
                    <small className="font-semibold text-[14px]">$ 28,99</small>
                </div>

                {/* Add to cart button */}
                <div className="flex flex-col">
                    <button className="text-sm font-medium bg-primary rounded-lg py-[4px] hover:bg-primary/80 active:scale-95 ">
                        Add to cart
                    </button>
                </div>
            </div>

            {/* Add to favorite button */}
            <button className="inline-flex items-center justify-center appearance-none absolute top-3 right-3 group hover:bg-white/85 transition-colors rounded-full p-1">
                <Bookmark className="group-hover:stroke-black group-active:stroke-red-600 group-active:fill-red-600 transition-colors" />
            </button>
        </section>
    );
};
export default ProductItem;
