import Joi from "joi";

const questionTypeValidation = (data) => {
  const questionSchme = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
 
  });
  return questionSchme.validate(data);
};

export default questionTypeValidation;