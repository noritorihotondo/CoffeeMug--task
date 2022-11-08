import { StatusCodes } from 'http-status-codes';
import { APIError } from '../../lib/utils/api-error';
import { CreateProductSchema } from '../../dto/User/create.user.dto';
import { createUser, findProductById } from '../../services';
import { CreateProductResponse, HTTPMethod, ApiErrorCode, APIRoute } from '../../types';

export default {
  method: HTTPMethod.POST,
  url: '/products',
  schema: CreateProductSchema,
  controller: async (req, res, next): Promise<CreateProductResponse> => {
    const { id, name, price } = req.body;

    const isTaken = await findProductById(id);

    if (isTaken) {
      throw new APIError(
        'Email is already taken',
        StatusCodes.BAD_REQUEST,
        true,
        ApiErrorCode.ProductAlreadyExists,
        'CreateUser',
      );
    }

    return await createUser({ name, price });
  },
} as APIRoute;
