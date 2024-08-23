const axios = require("axios");
const dotenv = require("dotenv").config();
const Game = require("../models/game");

const getStatsById = async (req, res) => {
  const baseAddress = "https://fortnite-api.com/v2/stats/br/v2";

  try {
    const userId = req.params.id;

    if (!userId) {
      return res.json({ error: "UserId not found." });
    }

    const response = await axios.get(baseAddress, {
      params: {
        accountId: userId,
        accountType: "epic",
        timeWindow: "lifetime",
      },
      headers: {
        Authorization: process.env.FORT_API_KEY,
      },
    });

    return res.json(response.data);
  } catch (error) {
    return res.json({ error: "Error fetching data." });
  }
};

const getGameById = async (req, res) => {
  try {
    const gameId = req.params.id;
    if (!gameId) {
      return res.json({ error: "Error processing request." });
    }
    const game = await Game.findOne({ _id: gameId });
    if (!game) {
      return res.json({ error: "Game not found." });
    }
    return res.json(game);
  } catch (error) {
    return res.json({ error: "Error fetching game data." });
  }
};

module.exports = {
  getStatsById,
  getGameById,
};
