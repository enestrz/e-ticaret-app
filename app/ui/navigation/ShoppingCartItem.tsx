import { ShoppingCart } from "lucide-react";

const ShoppingCartItem = () => {
    return (
        <div className="inline-flex flex-row flex-nowrap text-nowrap gap-1 items-center  select-none cursor-pointer w-min">
            <span>My Cart</span>
            <ShoppingCart
                size={26}
                strokeWidth={1.5}
                absoluteStrokeWidth
                className=""
            />
        </div>
    );
};
export default ShoppingCartItem;
