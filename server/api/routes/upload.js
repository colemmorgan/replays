const express = require("express");
const cors = require("cors");
const multer = require('multer');
const { uploadReplay } = require('../controllers/uploadController');

const router = express.Router();

router.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173",
    })
);

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('replayFile'), uploadReplay);

module.exports = router;
