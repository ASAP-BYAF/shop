export type Category = "shoes" | "clothes" | "book";
export type Condition = "new" | "used";

export type User = {
  id: number;
  username: string;
  displayName: string;
  email: string;
  profileImageUrl: string;
  description: string;
};

export type Product = {
  id: number;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  blurDateUrl: string;
  price: number;
  condition: Conditon;
  owner: User;
};

export type ApiContext = {
  apiRootUrl: string;
};
