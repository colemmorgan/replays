const extractReplayInfo = (replay) => {
  const date = replay.info.Timestamp || null;
  const lengthInMs = replay.info.lengthInMs;

  const unfilteredEvents = replay.events;
  const filteredEvents = unfilteredEvents.filter(
    (e) => e.group === "playerElim" && e.knocked === false
  );
  const playerElims = filteredEvents.map(
    ({ endtime, eliminated, eliminator, gunType }) => ({
      endtime,
      eliminated,
      eliminator,
      gunType: gunType === 50 ? "Other" : gunType,
    })
  );

  const unfilteredPlayers = replay.gameData.players;
  const filteredPlayers = unfilteredPlayers.filter(
    (player) => player.Place !== undefined
  );

  const [unfilteredPlayerStats] = replay.events.filter(
    (e) => e.metadata === "AthenaMatchStats"
  ) || [{}];

  const playerStats = {
    accuracy: unfilteredPlayerStats.accuracy,
    eliminations: unfilteredPlayerStats.eliminations,
    damageToPlayers: unfilteredPlayerStats.damageToPlayers,
    damageTaken: unfilteredPlayerStats.damageTaken,
    damageToStructures: unfilteredPlayerStats.damageToStructures,
  };

  const [unfilteredMatchStats = {}] = replay.events.filter(
    (e) => e.metadata === "AthenaMatchTeamStats"
  );

  const filterMatchStats = {
    position: unfilteredMatchStats.position,
    totalPlayers: unfilteredMatchStats.totalPlayers
  }
  const game = {
    date: date,
    lengthInMs: lengthInMs,
    playerElims: playerElims,
    players: filteredPlayers,
    playerStats: playerStats
  }
};

module.exports = {
  extractReplayInfo,
};
