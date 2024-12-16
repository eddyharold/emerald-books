export type Book = {
  id: number;
  collectionId: string;
  image: string;
  name: string;
  audience: string;
  description: string;
  status: "published" | "pending";
  author: {
    image: string;
    name: string;
    description: string;
  };
  category: string;
  characteristics: {
    pages: number;
    language: string;
    distribution: string;
    distributors: string[];
    publicationDate: string;
  };
  tags: string[];
  price: number;
};
