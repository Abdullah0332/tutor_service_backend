import multer from "multer";
import fs from "fs";

var dir = "./src/data";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

export const file = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "./src/data");
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    },
  }),
});
