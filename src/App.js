import logo from './logo.svg';
import './App.css';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './components/details';
import { BrowserRouter as Router, Route } from "react-router-dom";
import  Navbar  from './components/navbar';
import Home from './components/home'
import Favorite from './components/favorite';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Route path="/" exact component={Home}/>
    <Route path="/details/:id" exact component={Details}/>
    <Route path="/favorite" exact component={Favorite}/>
    </Router>
    </>
  );
}

export default App;
