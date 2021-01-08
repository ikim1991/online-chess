import { Dispatch } from "react";
import { DEFAULT_RESULTS, Hand, PENDING_RESULTS, Results, RockPaperScissorsDispatch, ROCK_PAPER_SCISSORS, SHOW_RESULTS } from "./RockPaperScissorsTypes";

export const pendingResults = () => ({type: PENDING_RESULTS})
export const rockPaperScissors = (hand: Hand) => ({type: ROCK_PAPER_SCISSORS, payload: hand})
export const showResults = (results: Results) => ({type: SHOW_RESULTS, payload: results})
export const defaultResults = () => ({type: DEFAULT_RESULTS})