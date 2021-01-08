export const ROCK_PAPER_SCISSORS = "ROCK_PAPER_SCISSORS";
export const PENDING_RESULTS = "PENDING_RESULTS";
export const SHOW_RESULTS = "SHOW_RESULTS";
export const DEFAULT_RESULTS = "DEFAULT_RESULTS"

export type Hand = "ROCK" | "PAPER" | "SCISSORS" | "";
export type Results = "WIN" | "LOSE" | "DRAW" | "PENDING";

interface RockPaperScissors{
    type: typeof ROCK_PAPER_SCISSORS,
    payload: Hand
}

interface PendingResults{
    type: typeof PENDING_RESULTS
}

interface ShowResults{
    type: typeof SHOW_RESULTS,
    payload: Results
}

interface DefaultResults{
    type: typeof DEFAULT_RESULTS
}

export type RockPaperScissorsDispatch = RockPaperScissors | PendingResults | ShowResults | DefaultResults;
