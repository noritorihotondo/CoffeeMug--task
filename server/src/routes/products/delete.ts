import { StatusCodes } from 'http-status-codes';
import { APIError } from '../../lib/utils/api-error';
import { ApiErrorCode, APIRoute, HTTPMethod } from '../../types';
import { isUuid } from '../../lib/utils/isUuid';
import { deleteProduct } from '../../services';
export default {
  method: HTTPMethod.DELETE,
  url: '/product/:id',
  controller: async (req, res, next) => {
    const { id } = req.params;

    if (!isUuid(id)) {
      throw new APIError(
        'The uuid is not compatible with id',
        StatusCodes.NOT_FOUND,
        true,
        ApiErrorCode.CantFindProduct,
        'GetProductById',
      );
    }

    const product = await deleteProduct(id);

    return product;
  },
} as APIRoute;
