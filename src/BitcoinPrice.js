import React, { useEffect, useState } from 'react';

// wyswietl aktualną cenę bitcoina i podpowiedz czy warto zainwestować

export const BitcoinPrice = (props) => {
  const [lastPrice, setLastPrice] = useState('');
  const [changePrice, setChangePrice] = useState('');

  useEffect(async () => {
    const res = await fetch(
      'https://api2.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT'
    );
    const data = await res.json();
    console.log(data);
    setLastPrice(Number(data.lastPrice));
    setChangePrice(Number(data.priceChange));
  }, []);

  return (
    <>
      <p>Aktualna cena Bitcoin wynosi: {lastPrice} PLN</p>
      <p>
        Nastąpiła zmiana ceny o: {changePrice} PLN, chyba warto zainwestować
      </p>
    </>
  );
};
