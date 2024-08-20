const mongoose = require("mongoose");
const { Schema } = mongoose;

const gamesSchema = new Schema({
    date: String,
    lengthInMs: Number,
    killFeed: [{
        eventTime: Number,
        eliminated: String,
        eliminator: String,
        gunType: String
    }],
    players: [{
        bIsABot: Boolean,
        PlayerNamePrivate: String,
        Place: Number,
        KillScore: Number
    }],
    userStats: {
        accuracy: Number,
        eliminations: Number,
        damageToPlayers: Number,
        damageTaken: Number,
        damageToStructures: Number
    },
    matchStats: {
        totalPlayers: Number,
        position: Number
    }
})

const GamesModel = mongoose.model("Games", gamesSchema);

module.exports = GamesModel