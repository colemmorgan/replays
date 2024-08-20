const extractReplayInfo = (replay) => {

  const date = replay.info.Timestamp || null;
  const lengthInMs = replay.info.LengthInMs;
  console.log(lengthInMs)

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
  const filteredPlayers = unfilteredPlayers
    .filter((player) => player.Place !== undefined)
    .map((player) => ({
      ...player,
      bIsABot: player.bIsABot !== undefined ? player.bIsABot : false,
      KillScore: player.KillScore !== undefined ? player.KillScore : 0
    }));

  const [unfilteredUserStats] = replay.events.filter(
    (e) => e.metadata === "AthenaMatchStats"
  ) || [{}];

  const userStats = {
    accuracy: unfilteredUserStats.accuracy || 0,
    eliminations: unfilteredUserStats.eliminations || 0,
    damageToPlayers: unfilteredUserStats.damageToPlayers || 0,
    damageTaken: unfilteredUserStats.damageTaken || 0,
    damageToStructures: unfilteredUserStats.damageToStructures || 0,
  };

  const [unfilteredMatchStats = {}] = replay.events.filter(
    (e) => e.metadata === "AthenaMatchTeamStats"
  );

  const filteredMatchStats = {
    position: unfilteredMatchStats.position || 0,
    totalPlayers: unfilteredMatchStats.totalPlayers || 0,
  };
  const game = {
    date: date,
    lengthInMs: lengthInMs,
    killFeed: playerElims,
    players: filteredPlayers,
    userStats: userStats,
    matchStats: filteredMatchStats,
  };
  return game;
};

module.exports = {
  extractReplayInfo,
};
