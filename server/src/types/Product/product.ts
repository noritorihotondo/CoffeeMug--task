export interface ProductEntity {
  id: string;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProductResponse {
  id: string;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProductRequest {
  name: string;
  price: number;
}

export interface UpdateProductResponse {
  id: string;
  name?: string;
  price?: number;
  createdAt: Date;
  updatedAt: Date;
}
