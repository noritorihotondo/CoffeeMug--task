import { StatusCodes } from 'http-status-codes';
import { Product } from '../../entities/Product';
import { APIError } from '../../lib/utils/api-error';
import {
  CreateProductRequest,
  CreateProductResponse,
  UpdateProductResponse,
  ApiErrorCode,
} from '../../types';

export const createProduct = async (body: CreateProductRequest): Promise<CreateProductResponse> => {
  let product = new Product();
  product.name = body.name;
  product.price = body.price;

  await product.save();

  if (!product) {
    throw new APIError(
      "Can't find the product",
      StatusCodes.NOT_FOUND,
      false,
      ApiErrorCode.CantFindProduct,
      'CreateProduct',
    );
  }

  return product;
};

export const findProductByName = async (name: string) => {
  const product = await Product.findOneBy({ name });

  return product;
};

export const findProductById = async (id: string) => {
  const product = await Product.findOneBy({ id });

  return product;
};

export const findAllProducts = async () => {
  const products = await Product.find();

  return products;
};

export const deleteProduct = async (id: string) => {
  const user = await Product.delete({ id });

  return user;
};

export const updateProduct = async (
  id: string,
  name: string,
  price: number,
): Promise<UpdateProductResponse> => {
  await Product.update({ id }, { name, price, updatedAt: new Date() });

  const product = await findProductById(id);

  if (!product) {
    throw new APIError(
      "Can't find the product",
      StatusCodes.NOT_FOUND,
      false,
      ApiErrorCode.CantFindProduct,
      'UpdateProduct',
    );
  }

  return product;
};
