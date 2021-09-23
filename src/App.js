import NavBar from "./components/Layouts/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import History from "./views/History";
import Contacts from "./views/Contacts";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/contacts" component={Contacts}></Route>
          <Route exact path="/history" component={History}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
