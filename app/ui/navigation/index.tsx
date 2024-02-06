import Link from "next/link";
import SearchBar from "./SearchBar";
import UserActions from "./UserActions";
import ShoppingCartItem from "./ShoppingCartItem";

const Navigation = () => {
    return (
        <nav className="flex flex-row justify-between  sm:justify-around items-center p-2 shadow-sm">
            {/* Logo */}
            <Link
                href={"/"}
                className="text-nowrap text-xl font-light leading-none"
            >
                E Ticaret Logo
            </Link>

            {/* Search Bar */}
            <SearchBar />

            {/* Actions */}
            <div className="inline-flex flex-row gap-6 font-light leading-none tracking-tight items-center text-lg justify-end">
                <ShoppingCartItem />
                <UserActions />
            </div>
        </nav>
    );
};
export default Navigation;
