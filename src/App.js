import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Discover from "./components/Pages/Discover";
import About from "./components/Pages/About";
import Search from "./components/Pages/Search";
import Navbar from "./components/NavTabs";




function App() {
  return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
        </div>
      </Router>
    );
  }
export default App;
