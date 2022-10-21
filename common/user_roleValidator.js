import Joi from "joi";

const userRoleValidation = (data) => {
  const userSchme = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
 
  });
  return userSchme.validate(data);
};

export default userRoleValidation;
