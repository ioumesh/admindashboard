import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/SideBar/Sidebar";
import Home from "./Pages/Home/Home";
import './global.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserList from "./Pages/UserList/UserList";

function App() {
  return (

    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/users" exact><UserList /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
