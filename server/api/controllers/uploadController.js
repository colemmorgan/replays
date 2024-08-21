const fs = require("fs");
const parseReplay = require("../../fortnite-parser/parser");
const { extractReplayInfo } = require("../helpers/upload");
const Game = require('../models/game')
const User = require("../models/user");

async function uploadReplay(req, res) {
  const filePath = req.file.path;

  const userId = req.body.userId

  if(!userId) {
    res.status(500).send("User Not Logged In.");
    return
  }

  try {
    const replay = await parseReplay(filePath);
    const game = extractReplayInfo(replay);
    const gameDocument = new Game(game);
    await gameDocument.save();

    const userGameData = {
      gameId: gameDocument._id,
      date: gameDocument.date,
      lengthInMs: gameDocument.lengthInMs,
      position: gameDocument.matchStats.position,
      eliminations: gameDocument.userStats.eliminations
    }

    
    await User.findByIdAndUpdate(
      userId,
      { $push: { games: userGameData } },
      { new: true, useFindAndModify: false }
    );

    res.status(201).json({ message: "Replay uploaded and game saved successfully!" });
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
