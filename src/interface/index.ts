export interface IProduct {
  id: number | string;
  sku?: string;
  title: string;
  price: number;
  discount?: number;
  thumbnail?: string;
  description?: string;
  category?: string;
  brand?: string;
  tags?: string[];
  images?: string[];
}
