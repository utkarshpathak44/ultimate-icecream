import { useState, useEffect } from "react";

const exchangeRates: Record<string, number> = {
  usd: 1,
  eur: 0.9609,
  gbp: 0.7994,
  inr: 82.5,
  jpy: 152.12,
};

const Converter: React.FC = () => {
  const [entered, setEntered] = useState<number>(0);
  const [enteredCurrency, setEnteredCurrency] = useState<string>("usd");
  const [convertedCurrency, setConvertedCurrency] = useState<string>("usd");
  const [produced, setProduced] = useState<number>(0);

  // Function to calculate conversion
  const HandleChange = () => {
    if (entered === 0) {
      setProduced(0);
      return;
    }
    const convertedAmount =
      (entered / exchangeRates[enteredCurrency]) * exchangeRates[convertedCurrency];
    setProduced(convertedAmount);
  };

  // Automatically update conversion when values change
  useEffect(() => {
    HandleChange();
  }, [entered, enteredCurrency, convertedCurrency]);

  return (
    <div>
      <label htmlFor="entered">Enter the amount:</label>
      <input
        type="number"
        onChange={(e) => setEntered(parseFloat(e.target.value) || 0)}
        value={entered}
      />

      <label htmlFor="currencyFrom">Select your currency:</label>
      <select
        id="currencyFrom"
        value={enteredCurrency}
        onChange={(e) => setEnteredCurrency(e.target.value)}
      >
        {Object.keys(exchangeRates).map((currency) => (
          <option key={currency} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>

      <label htmlFor="produced">Converted amount:</label>
      <input type="number" value={produced.toFixed(2)} readOnly />

      <label htmlFor="currencyTo">Select currency to convert to:</label>
      <select
        id="currencyTo"
        value={convertedCurrency}
        onChange={(e) => setConvertedCurrency(e.target.value)}
      >
        {Object.keys(exchangeRates).map((currency) => (
          <option key={currency} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Converter;
