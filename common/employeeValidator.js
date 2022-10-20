import Joi from "joi";

const employeeValidation = (data) => {
  const employeeSchme = Joi.object({
    emp_name: Joi.string().required(),
    emp_email: Joi.string().required(),
    emp_address: Joi.string().required(),
    emp_phone: Joi.string().required(),
    role_id: Joi.string().required(),

  });
  console.log("validation returned")
  return employeeSchme.validate(data);
};

export default employeeValidation;
