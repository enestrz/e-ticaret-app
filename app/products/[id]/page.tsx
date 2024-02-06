import { Product, products } from "../../../data/items";

export async function getProduct(params: { id: string }) {
    return await products.find((product) => product.id === params.id);
}

export default async function Page({ params }: { params: { id: string } }) {
    const product = await getProduct(params);
    console.log(product);
    return (
        <div>
            <span>{params.id}</span>
            <h1 className="text-white">{product?.name}</h1>
        </div>
    );
}
