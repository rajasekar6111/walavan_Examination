import Joi from "joi";

const questionsValidation = (data) => {
  const questionsSchme = Joi.object({
    name: Joi.string().required(),
    image_url: Joi.string().required(),
    question_type_id: Joi.string().required(),
    is_delete: Joi.string().required(),
    is_active: Joi.string().required(),
    created: Joi.string().required(),
  });
  console.log("validation returned")
  return questionsSchme.validate(data);
};

export default questionsValidation;