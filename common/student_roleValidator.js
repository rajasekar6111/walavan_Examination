import Joi from "joi";

const studentRoleValidation = (data) => {
  const studentSchme = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
 
  });
  return studentSchme.validate(data);
};

export default studentRoleValidation;
