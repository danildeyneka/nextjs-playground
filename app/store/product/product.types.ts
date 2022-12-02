interface ratingT {
    rate: number;
    count: number;
}

export interface productT {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ratingT;
}