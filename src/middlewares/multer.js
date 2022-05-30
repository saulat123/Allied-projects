const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/data/uploads/");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + ext);
  },
});
function fileFilter(req, file, cb) {
  if (file.mimetype.split("/")[0] == "image") {
    console.log("img");
    cb(null, true);
  } else {
    // To reject this file pass false, like so:
    console.log("not img");
    cb(new Error("I don't have a clue!"), false);
  }
  // You can always pass an error if something goes wrong:
}
// const upload = multer({ storage: storage,  });
const upload = multer({ storage: storage, fileFilter: fileFilter });
// const uploadFile = upload.single('upload');

module.exports = {
    upload,
  };
  