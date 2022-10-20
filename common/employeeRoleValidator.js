import Joi from "joi";

const employeeRoleValidation = (data) => {
  const employeeSchme = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
 
  });
  return employeeSchme.validate(data);
};

export default employeeRoleValidation;
