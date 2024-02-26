"use client"

import { notFound } from "next/navigation"

type props = {
    params: {
        productId: string
        reviewsId: string
    }
}

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function Reviews({ params }: props) {
    // const random = getRandomInt(2);

    // if (random === 1) {
    //     throw new Error("Error Loading Review");
    // }

    if (parseInt(params.reviewsId) > 1000) {
        notFound();
    }
    return (
        <h1>Review {params.reviewsId} for product {params.productId}</h1>
    );
}
