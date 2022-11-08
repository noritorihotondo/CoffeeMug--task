import { StatusCodes } from 'http-status-codes';
import { APIRoute, HTTPMethod, ApiErrorCode } from '../../types';
import { APIError } from '../../lib/utils/api-error';
import { findProductById } from '../../services';
import { isUuid } from '../../lib/utils/isUuid';

export default {
  method: HTTPMethod.GET,
  url: '/product/:id',
  controller: async (req, res, next) => {
    const { id } = req.params;

    if (!isUuid(id)) {
      throw new APIError(
        'The uuid is not compatible with the given id',
        StatusCodes.NOT_FOUND,
        true,
        ApiErrorCode.CantFindProduct,
        'GetProductById',
      );
    }

    const user = await findProductById(id);

    if (!user) {
      throw new APIError(
        "Can't find the user",
        StatusCodes.NOT_FOUND,
        true,
        ApiErrorCode.CantFindProduct,
        'GetProductById',
      );
    }

    return user;
  },
} as APIRoute;
