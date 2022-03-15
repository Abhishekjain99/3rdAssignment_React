import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import ApiJson from './components/ApiJson';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App" style = {{backgroundColor : 'orange'}}>
          <br />
          <br />
          <br />
          <h1>Click On The Link Below To See The API Result.</h1>
          <br />
          <br />
          <br />
      <NavBar/>
      <Switch>
        <Route exact path="/posts" component= {Posts} />
        <Route exact path="/apiJson" component= {ApiJson} />
        <Route exact path="/home" component= {Home} />
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
