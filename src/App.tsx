import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { calculateGameHash } from "./utils/crash";

function App() {
  const [round, setRound] = useState(0);
  const [result, setCurrentResult] = useState(0);
  const [nextResults, setNextResults] = useState<number[]>([]);
  const [salt, setSalt] = useState("");
  const [outcome, setOutcome] = useState("");

  return (
    <div className="App">
      <body>
        <table
          onSubmit={() => {
            setOutcome(calculateGameHash(round, result, nextResults, salt));
          }}
        >
          <tr>
            <td>Current ROUND:</td>
            <td>
              <input
                type="number"
                onChange={(e) => setRound(Number.parseInt(e.target.value) ?? 0)}
              />
            </td>
          </tr>
          <tr>
            <td>Current Result:</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>Outcome Round {round + 1}:</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>Outcome Round {round + 2}:</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>Outcome Round {round + 3}:</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>Outcome Round {round + 4}:</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>Outcome Round {round + 5}:</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>Outcome Round {round + 6}:</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>Outcome Round {round + 7}:</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>Outcome Round {round + 8}:</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>Outcome Round {round + 9}:</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>Outcome Round {round + 10}:</td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>Salt:</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button>SUBMIT</button>
            </td>
          </tr>
          <tr>
            <td>Outcome:</td>
            <td>{outcome}</td>
          </tr>
        </table>
      </body>
    </div>
  );
}

export default App;
