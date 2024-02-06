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
        id: "1",
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
        id: "2",
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
        id: "3",
        name: "Xiaomi Redmi Note 12 Pro 128GB",
        price: 299.99,
        description: "Great performance and battery life at a low price",
        brand: "Xiaomi",
        category: "Electronics",
        image: "https://images.pexels.com/photos/12563780/pexels-photo-12563780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rating: 2.5,
        numReviews: 137,
        stock: 250,
    },
    {
        id: "4",
        name: "Apple Watch Series 7",
        price: 50.99,
        description: "A smartwatch that looks great on your wrist",
        brand: "Apple",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1642101373432-a9c683c34902?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.9,
        numReviews: 7,
        stock: 5,
    },
    {
        id: "5",
        name: "Apple Macbook Pro 2022",
        price: 1999.99,
        description: "A great laptop for all your needs",
        brand: "Apple",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.8,
        numReviews: 15,
        stock: 20,
    },
    {
        id: "6",
        name: "Sony Playstation 5",
        price: 499.99,
        description: "The ultimate gaming console",
        brand: "Sony",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.7,
        numReviews: 10,
        stock: 15,
    },
];
