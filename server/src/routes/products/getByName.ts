import { StatusCodes } from 'http-status-codes';
import { APIRoute, HTTPMethod, ApiErrorCode } from '../../types';
import { APIError } from '../../lib/utils/api-error';
import { findProductByName } from '../../services';
import { isUuid } from '../../lib/utils/isUuid';

export default {
  method: HTTPMethod.GET,
  url: '/product/:id',
  controller: async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!isUuid(id)) {
      throw new APIError(
        'The uuid is not compatible with the given id',
        StatusCodes.NOT_FOUND,
        true,
        ApiErrorCode.CantFindProduct,
        'GetProductById',
      );
    }

    const user = await findProductByName(name);

    if (!user) {
      throw new APIError(
        "Can't find the product by given name",
        StatusCodes.NOT_FOUND,
        true,
        ApiErrorCode.CantFindProduct,
        'GetProductByName',
      );
    }

    return user;
  },
} as APIRoute;
