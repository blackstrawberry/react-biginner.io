import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import MovieApp from "./routes/MovieApp";
import Detail from "./routes/Detail";
import CoinTracker from "./routes/CoinTracker";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/movie/">
          <MovieApp />
        </Route>
        <Route path="/cointracker">
          <CoinTracker />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    );
}
export default App;
