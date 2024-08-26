import GameMode from "./GameMode"

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




export default AccountStatsType