"use client";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayoout({
    children,
}: {
    children: React.ReactNode
}) {
    const random = getRandomInt(2);

    if (random === 1) {
        throw new Error("Error Loading Product");
    }

    return (
        <>
            {children}
            <h2>Feature Products</h2>
        </>
    )
}