export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    brand: string;
    category: string;
    image: string;
    rating: number;
    numReviews: number;
    stock: number;
};

export const products: Product[] = [
    {
        id: crypto.randomUUID(),
        name: "IPhone 13 Pro Max 256GB",
        price: 799.99,
        description: "A large phone with one of the best screens",
        brand: "Apple",
        category: "Electronics",
        image: "https://images.pexels.com/photos/12879428/pexels-photo-12879428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rating: 4.5,
        numReviews: 10,
        stock: 10,
    },
    {
        id: crypto.randomUUID(),
        name: "Samsung Galaxy S21 Ultra 256GB",
        price: 699.99,
        description: "A great phone with one of the best cameras",
        brand: "Samsung",
        category: "Electronics",
        image: "https://images.pexels.com/photos/11772523/pexels-photo-11772523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rating: 4.0,
        numReviews: 13,
        stock: 18,
    },
    {
        id: crypto.randomUUID(),
        name: "Samsung Galaxy S21 Ultra 256GB",
        price: 699.99,
        description: "A great phone with one of the best cameras",
        brand: "Samsung",
        category: "Electronics",
        image: "https://images.pexels.com/photos/11772523/pexels-photo-11772523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rating: 4.0,
        numReviews: 13,
        stock: 18,
    },
];
