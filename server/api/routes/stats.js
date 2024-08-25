const express = require("express");
const cors = require("cors");
const {getStatsById, getGameById} = require('../controllers/statsContoller')


const router = express.Router();

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/stats/:id", getStatsById);
router.get("/games/:id", getGameById)

module.exports = router;
