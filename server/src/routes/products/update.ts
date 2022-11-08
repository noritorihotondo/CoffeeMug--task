import { StatusCodes } from 'http-status-codes';
import { APIRoute, HTTPMethod, ApiErrorCode, UpdateProductResponse } from '../../types';
import { APIError } from '../../lib/utils/api-error';
import { findProductById, updateProduct } from '../../services';
import { isUuid } from '../../lib/utils/isUuid';
import { UpdateProductSchema } from '../../dto/User/create.user.dto';

export default {
  method: HTTPMethod.PUT,
  url: '/product/:id',
  schema: UpdateProductSchema,
  controller: async (req, res, next): Promise<UpdateProductResponse> => {
    const { name, price } = req.body;
    const { id } = req.params;

    if (!isUuid(id)) {
      throw new APIError(
        'The uuid is not compatible with id',
        StatusCodes.NOT_FOUND,
        true,
        ApiErrorCode.CantFindProduct,
        'UpdateUser',
      );
    }

    const user = await findProductById(id);

    if (!user) {
      throw new APIError(
        "Can't find the user",
        StatusCodes.NOT_FOUND,
        true,
        ApiErrorCode.CantFindProduct,
        'UpdateUser',
      );
    }

    const updatedProduct = await updateProduct(id, name, price);

    return updatedProduct;
  },
} as APIRoute;
