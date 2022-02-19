const multer = require("multer");
const fs = require("fs");
const path = require("path");

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

const delete_file = (str) => {
  fs.unlink(
    path.join(__dirname, "../", str),
    (err) => {
      console.log(err);
    }
  );
}

module.exports = { file, delete_file };
