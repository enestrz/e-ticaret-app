"use client";

import { Search } from "lucide-react";

const SearchBar = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <form
            className="relative w-1/3"
            onSubmit={handleSubmit}
        >
            <input
                className="w-full rounded-lg px-4 py-1 leading-7 text-gray-200 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                type="text"
                placeholder="Search"
            />
            <button
                type="submit"
                className=" inline-flex items-center justify-center box-border appearance-none subpixel-antialiased  absolute right-2 top-1/2 -translate-y-1/2 select-none"
            >
                <Search
                    size={24}
                    strokeWidth={1.5}
                    absoluteStrokeWidth
                    className="text-gray-300 hover:text-gray-100 hover:stroke-2 transition-colors"
                />
            </button>
        </form>
    );
};
export default SearchBar;
