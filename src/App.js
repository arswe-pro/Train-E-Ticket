import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import Login from './Components/Form/Login';
import Register from './Components/Form/Register';
import Contact from './Components/Contact/Contact';
import SearchLocation from './Components/SearchLocation/SearchLocation';
import { createContext, useState } from 'react';
import SearchResult from './Components/SearchResult/SearchResult';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
	const [loggedInUser, setLoggedInUser] = useState({})
	return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<Router>
				<Switch>

					<Route exact path="/"> <Home /> </Route>

					<Route path="/Home"> <Home /> </Route>

					<Route path="/Contact"> <Contact /> </Route>

					<PrivateRoute  path="/SearchLocation/:title"> <SearchLocation /> </PrivateRoute>

					<Route path="/Login"> <Login /> </Route>

					<Route path="/Register"> <Register /> </Route>

					<PrivateRoute path="/SearchResult"> <SearchResult /> </PrivateRoute>

					<Route path="*"> <NoMatch /> </Route>

				</Switch>
			</Router>
		</UserContext.Provider >

	);
}

export default App;
