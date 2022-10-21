import Joi from "joi";

const userValidation = (data) => {
  const userSchme = Joi.object({
    LastName: Joi.string().required(),
    FirstName: Joi.string().required(),
    uuid: Joi.string().required(),
    Age: Joi.string().required(),
    user_role_id: Joi.string().required(),
    email_id: Joi.string().required(),
    password: Joi.string().required(),
    phone_no: Joi.string().required(),
    created: Joi.string().required(),

  });
  console.log("validation returned")
  return userSchme.validate(data);
};

export default userValidation;
