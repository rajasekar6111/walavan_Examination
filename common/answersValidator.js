import Joi from "joi";

const answersValidation = (data) => {
  const answersSchme = Joi.object({
    answers: Joi.string().required(),
    image_url: Joi.string().required(),
    question_id: Joi.string().required(),
    iscurrect: Joi.string().required(),
    
  });
  console.log("validation returned")
  return answersSchme.validate(data);
};

export default answersValidation;