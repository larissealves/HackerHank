import React, { useState } from "react";
import Table from "./Table";

const AVALIABLE_BALANCE = Number(17042.67);
function Main() {

  const [valueForExchange, setValueForExchange] = useState();
  const [error, setError] = useState();

  const handleChange = (e) => {
    const value = e.target.value;

    setValueForExchange(value);

    if (value === "") {
      setError("Amount cannot be empty");
    } else if (Number(value) < 0.01) {
      setError("Amount cannot be less than $0.01");
    } else if (Number(value) > 17042.67) {
      setError("Amount cannot exceed the available balance");
    } else {
      setError("");
    }
  };

  return (
    <div className="layout-column align-items-center mx-auto">
      <h1>CryptoRank Exchange</h1>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
          <label>
            I want to exchange $ <input className="w-10" data-testid="amount-input" required type="number" placeholder="USD"
              value={valueForExchange}
              onChange={handleChange} /> of my $
            <span>17042.67</span>:
          </label>

          {error &&
            <p data-testid="error" className="form-hint error-text mt-3 pl-0 ml-0">
              {error}
            </p>
          }

        </div>
      </section>
      <Table
        inputValueForExchange={valueForExchange}
        hasError={!!error} /
      >
    </div>
  );
}

export default Main;


==============================================

import React, { useState } from "react";
import { cryptocurrencyList } from "../cryptocurrency-list";

function Table({ inputValueForExchange, hasError }) {

  const table =
    cryptocurrencyList.map(item => ({
      code: item.code,
      name: item.name,
      rate: (item.rate).toFixed(8),
      numberCoins: inputValueForExchange ?
        (Number(inputValueForExchange) * Number(item.rate)).toFixed(8) :
        (0.00000000).toFixed(8),
    }));

  return (
    <div className="card card-text mt-10 mx-4">
      <table className="mb-0">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data" >
          {table.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>1 USD = {item.rate} {item.code} </td>
              <td>
                {hasError ? "n/a" : item.numberCoins}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
