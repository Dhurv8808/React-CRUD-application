import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import Mi from './Mi';
import Rcb from './Rcb';
import Csk from './Csk';

const Links = () => (
  <div class="list-group">
    <NavLink className="list-group-item " exact to ={'/Bangalore'} > Royal Challengers Bangalore</NavLink>
    <NavLink className="list-group-item "  to ={'/Chennai'} > Chennai Super Kings</NavLink>
    <NavLink className="list-group-item "  to ={'/Mumbai'} > Mumbai Indians</NavLink>
  </div>
)

class ShowTeam extends Component {
  render() {
  return (
    <Router>
      <div>
      <Links />
        <Route path='/Bangalore' component = {Rcb} />
        <Route path='/Chennai' component = {Csk} />
        <Route path='/Mumbai' component = {Mi} />
      </div>
    </Router>
  );}
}

export default ShowTeam;
