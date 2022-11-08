import Joi from 'joi';

const nameValidation = Joi.string().alphanum().min(3).max(100).required();
const priceValidation = Joi.number().required();

export const CreateProductSchema = Joi.object({
  name: nameValidation,
  price: priceValidation,
});

export const UpdateProductSchema = Joi.object({
  name: nameValidation,
  price: priceValidation,
});
