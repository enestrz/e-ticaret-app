export async function generateStaticParam() {
    const res = await fetch("");
}

export default function Brand({ params }: { params: { name: string } }) {
    return <main>{params.name}</main>;
}
