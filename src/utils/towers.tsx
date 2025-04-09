import createHash from "create-hash";

export const calculateTowersHash = (
  currentRound: number,
  results: string,
  salt: string
): string => {
  if (results.length !== 10) {
    return "ERROR - Result not 10 characters";
  }
  let input = `TOWERS_${currentRound.toFixed(0)}`;
  input = input.concat("_", results);
  input = input.concat("_", salt);

  let hash = createHash("sha256").update(input).digest("hex");

  //Re-hash it X-times to avoid bruteforce
  for (let i = 0; i < 100000; i++) {
    hash = createHash("sha256").update(hash).digest("hex");
  }

  return hash;
};
