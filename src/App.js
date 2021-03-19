import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import Login from './Components/Form/Login';
import Register from './Components/Form/Register';
import Contact from './Components/Contact/Contact';
import Detail from './Components/Detail/Detail';

function App() {
	return (
		<Router>
			<Switch>

				<Route exact path="/"> <Home /> </Route>

				<Route path="/Home"> <Home /> </Route>

				<Route path="/Contact"> <Contact /> </Route>

				<Route path="/Detail/:id"> <Detail /> </Route>

				<Route path="/Login"> <Login /> </Route>

				<Route path="/Register"> <Register /> </Route>

				<Route path="*"> <NoMatch /> </Route>

			</Switch>
		</Router>
	);
}

export default App;
