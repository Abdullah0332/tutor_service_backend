const multer = require("multer");
const fs = require("fs");

var dir = "./data";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const file = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "./data");
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    },
  }),
});

module.exports = { file };
