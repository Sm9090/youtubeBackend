import multer from "multer";


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("Setting destination...")
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    console.log(file)
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage });

export { upload };
