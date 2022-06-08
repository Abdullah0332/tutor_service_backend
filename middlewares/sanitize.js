const sanitize = require("mongo-sanitize");

var sanitizeData = (req, res, next) => {
  try {
    req.body = sanitize(req?.body);
    req.params = sanitize(req?.params);
    req.file = sanitize(req?.file);
    req.query = sanitize(req?.query);
    next();
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = sanitizeData;
