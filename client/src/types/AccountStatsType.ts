type AccountStatsType = {
    battlePass: {
        level: number,
        progress: number
    }
    gameModes: {
        ltm: GameMode,
        duo: GameMode,
        solo: GameMode,
        squad: GameMode,
        overall: GameMode
    }
}

type GameMode = {
    deaths: number;
    kd: number;
    kills: number;
    kpm: number;
    matches: number;
    minutesPlayed: number;
    playersOutlived: number;
    winRate: number;
    wins: number;
}


export default AccountStatsType