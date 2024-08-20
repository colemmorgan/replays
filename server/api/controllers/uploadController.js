const fs = require("fs");
const parseReplay = require("../../fortnite-parser/parser");
const { extractReplayInfo } = require("../helpers/upload");

async function uploadReplay(req, res) {
  const filePath = req.file.path;

  try {
    const replay = await parseReplay(filePath);
    extractReplayInfo(replay);
    res.json(replay);
  } catch (error) {
    console.error("Error parsing replay file:", error);
    res.status(500).send("Error parsing replay file");
  } finally {
    try {
      fs.unlinkSync(filePath);
    } catch (unlinkError) {
      console.error("Error deleting file:", unlinkError);
    }
  }
}

module.exports = {
  uploadReplay,
};
