import React, { useState } from "react";
import "./App.css";
import { calculateGameHash } from "./utils/crash";
import { calculateTowersHash } from "./utils/towers";

function App() {
  const [round, setRound] = useState(0);
  const [roundTower, setRoundTower] = useState(0);
  const [result, setCurrentResult] = useState(0);
  const [resultTower, setCurrentResultTower] = useState("");
  const [nextResults, setNextResults] = useState<number[]>([]);
  const [salt, setSalt] = useState("");
  const [saltTower, setSaltTower] = useState("");
  const [outcome, setOutcome] = useState("");
  const [outcomeTowers, setOutcomeTowers] = useState("");

  const createInputs = (count: number) => {
    let arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(
        <tr>
          <td>Outcome Round {round + i + 1}:</td>
          <td>
            <input
              type="number"
              onChange={(e) => {
                nextResults[i] = Number.parseFloat(e.target.value);
                setNextResults([...nextResults]);
              }}
            />
          </td>
          <td>{nextResults[i] && nextResults[i].toFixed(2)}</td>
        </tr>
      );
    }
    return <>{arr.map((input) => input)}</>;
  };

  return (
    <div className="App">
      <table style={{ padding: "20px" }}>
        <tr>
          <td>
            <b>Crash</b>
          </td>
          <td>Input</td>
          <td>Value</td>
        </tr>
        <tr>
          <td>Current ROUND:</td>
          <td>
            <input
              type="number"
              onChange={(e) => setRound(Number.parseFloat(e.target.value) ?? 0)}
            />
          </td>
          <td>{round.toFixed(0)}</td>
        </tr>
        <tr>
          <td>Current Result:</td>
          <td>
            <input
              type="number"
              onChange={(e) =>
                setCurrentResult(Number.parseFloat(e.target.value) ?? 0)
              }
            />
          </td>
          <td>{result.toFixed(2)}</td>
        </tr>
        {createInputs(10)}
        <tr>
          <td>Salt:</td>
          <td>
            <input type="text" onChange={(e) => setSalt(e.target.value)} />
          </td>
          <td>{salt}</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button
              onClick={() => {
                setOutcome(calculateGameHash(round, result, nextResults, salt));
              }}
            >
              GENERATE HASH
            </button>
          </td>
        </tr>
        <tr>
          <td>Outcome:</td>
          <td>{outcome}</td>
        </tr>
      </table>
      <table style={{ padding: "20px" }}>
        <tr>
          <td>
            <b>Towers</b>
          </td>
          <td>Input</td>
          <td>Value</td>
        </tr>
        <tr>
          <td>Round:</td>
          <td>
            <input
              type="number"
              onChange={(e) =>
                setRoundTower(Number.parseFloat(e.target.value) ?? 0)
              }
            />
          </td>
          <td>{roundTower.toFixed(0)}</td>
        </tr>
        <tr>
          <td>Result:</td>
          <td>
            <input
              type="string"
              onChange={(e) =>
                setCurrentResultTower(e.target.value.trim().toLocaleUpperCase())
              }
            />
          </td>
          <td>{resultTower.length === 10 ? "OK" : "Length Not OK"}</td>
        </tr>
        <tr>
          <td>Salt:</td>
          <td>
            <input type="text" onChange={(e) => setSaltTower(e.target.value)} />
          </td>
          <td>{salt}</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button
              onClick={() => {
                setOutcomeTowers(
                  calculateTowersHash(roundTower, resultTower, saltTower)
                );
              }}
            >
              GENERATE HASH
            </button>
          </td>
        </tr>
        <tr>
          <td>Outcome:</td>
          <td>{outcomeTowers}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
