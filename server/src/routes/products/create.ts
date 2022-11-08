import { StatusCodes } from 'http-status-codes';
import { APIError } from '../../lib/utils/api-error';
import { CreateProductSchema } from '../../dto/User/create.user.dto';
import { createProduct, findProductByName } from '../../services';
import { CreateProductResponse, HTTPMethod, ApiErrorCode, APIRoute } from '../../types';

export default {
  method: HTTPMethod.POST,
  url: '/products',
  schema: CreateProductSchema,
  controller: async (req, res, next): Promise<CreateProductResponse> => {
    const { id, name, price } = req.body;

    const isTaken = await findProductByName(name);

    if (isTaken) {
      throw new APIError(
        'Name is already taken',
        StatusCodes.BAD_REQUEST,
        true,
        ApiErrorCode.ProductAlreadyExists,
        'CreateProduct',
      );
    }

    return await createProduct({ name, price });
  },
} as APIRoute;
