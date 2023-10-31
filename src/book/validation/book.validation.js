const Joi = require("joi");

module.exports = (update = false) => {
  return (req, res, next) => {
    if (Object.keys(req.body).length === 0)
      return res.status(500).send({ message: "Request Body is required." });

    let schema;

    if (!!update) {
      // Use the previous validation logic
      schema = Joi.object({
        title: Joi.string(),
        author: Joi.string(),
        summary: Joi.string(),
        isbn: Joi.string(),
      }).or('title', 'author', 'summary', 'isbn');
    } else {
      // Use the new validation logic
      schema = Joi.object({
        title: Joi.string().required(),
        author: Joi.string().required(),
        summary: Joi.string().required(),
        isbn: Joi.string().required(),
      });
    }

    const { error, value } = schema.validate(req.body, { allowUnknown: true });
    if (error) return res.status(400).send({ message: error.details[0].message });
    req.body = value;
    return next();
  };
};
