import Joi from "joi";

const employeesValidation = (data) => {
  const employeesSchme = Joi.object({
    LastName: Joi.string().required(),
    FirstName: Joi.string().required(),
    uuid: Joi.string().required(),
    DOB: Joi.string().required(),
    emp_role_id: Joi.string().required(),
    email_id: Joi.string().required(),
    created: Joi.string().required(),

  });
  console.log("validation returned")
  return employeesSchme.validate(data);
};

export default employeesValidation;
