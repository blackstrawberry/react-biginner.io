import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true); 
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <h1>
        The Coins! ({coins.length})
      </h1>
      {loading ? <strong>Loading...</strong>: 
          <select>
            {coins.map((coin) => <option>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</option>)}
          </select>
      }
      <hr/><button><Link to="/">돌아가기</Link></button>
    </div>
  );
}
export default App;