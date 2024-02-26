import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>Welcome Stranger!</h1>
            <Link href="/blog">Blog</Link>
            <br />
            <Link href="/about">About</Link>
            <br />
            <Link href="/products">Products</Link>
            <br />
            <Link href="/order-product">Order Product</Link>
        </>
    )
}
