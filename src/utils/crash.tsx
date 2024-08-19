import { createHash } from "crypto";
//import * as crypto from "crypto-browserify";

export const calculateGameHash = (
  currentRound: number,
  currentMultiplier: number,
  nextResults: number[],
  salt: string
): string => {
  if (nextResults.length !== 10) {
    return "INVALID";
  }

  let input = currentRound.toFixed(0); // Add the current round
  input = input.concat("_", currentMultiplier.toFixed(2)); // Add the current multiplier

  for (const multiplier of nextResults) {
    input = input.concat("_", multiplier.toFixed(2)); // Add all the rest of the multipliers
  }

  input = input.concat("_", salt);

  let hash = createHash("sha256").update(input).digest("hex");

  //Re-hash it X-times to avoid bruteforce
  for (let i = 0; i < 100000; i++) {
    hash = createHash("sha256").update(hash).digest("hex");
  }

  return hash;
};
