const extractAccountStats = (rawStats) => {
  const gameModes = rawStats.stats.all;
  let filteredGameModes = {
    overall: gameModes.overall,
    solo: gameModes.solo,
    duo: gameModes.duo,
    squad: gameModes.squad,
    ltm: gameModes.ltm,
  };

  for (const mode in filteredGameModes) {
    if (filteredGameModes.hasOwnProperty(mode)) {
      filteredGameModes[mode] = {
        deaths: filteredGameModes[mode].deaths || 0,
        kd: filteredGameModes[mode].kd || 0,
        kpm: filteredGameModes[mode].killsPerMatch || 0,
        wins: filteredGameModes[mode].wins || 0,
        minutesPlayed: filteredGameModes[mode].minutesPlayed || 0,
        matches: filteredGameModes[mode].matches || 0,
        kills: filteredGameModes[mode].kills || 0,
        playersOutlived: filteredGameModes[mode].playersOutlived || 0,
        winRate: filteredGameModes[mode].winRate || 0,
      };
    }
  }

  const stats = {
    gameModes: filteredGameModes,
    battlePass: rawStats.battlePass
  }

  return stats
};

module.exports = {extractAccountStats}