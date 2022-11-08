import { APIRoute, HTTPMethod, ApiErrorCode } from '../../types';
import { findAllProducts } from '../../services';

export default {
  method: HTTPMethod.GET,
  url: '/products',
  controller: async (req, res, next) => {
    const products = await findAllProducts();

    return products;
  },
} as APIRoute;
