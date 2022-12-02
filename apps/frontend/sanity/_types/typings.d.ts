export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    author: {
        name: string;
        image: string;
    };
    description: string;
    mainImage: string;
    slug: {
        current: string;
    };
    body: [object];
    publishedAt: datetime,
}

export interface Category {
    _id : 'string',
    title: 'string',
    description: 'text',
}