import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import Login from './Components/Form/Login';
import Register from './Components/Form/Register';
import Contact from './Components/Contact/Contact';
import SearchLocation from './Components/SearchLocation/SearchLocation';
import { createContext } from 'react';
import SearchResult from './Components/SearchResult/SearchResult';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Blog from './Components/Blog/Blog';
import Auth, { AuthContextProvider } from './Components/Auth/useAuth';

export const UserContext = createContext();
function App() {
	const auth = Auth();
	console.log(auth);
	return (
		auth.user === undefined || auth.user ?
			<AuthContextProvider>
				<Router>
					<Switch>
						<Route exact path="/"> <Home /> </Route>
						<Route path="/Home"> <Home /> </Route>
						<PrivateRoute path="/Destination"> <SearchLocation /> </PrivateRoute>
						<Route path="/Blog"> <Blog /> </Route>
						<Route path="/Contact"> <Contact /> </Route>
						<PrivateRoute path="/SearchLocation/:title"> <SearchLocation /> </PrivateRoute>
						<Route path="/Login"> <Login /> </Route>
						<Route path="/Register"> <Register /> </Route>
						<PrivateRoute path="/SearchResult/:title/:pickFrom/:pickTo/:date"> <SearchResult /> </PrivateRoute>
						<Route path="*"> <NoMatch /> </Route>
					</Switch>
				</Router>
			</AuthContextProvider>
			:
			<h1>Loading</h1>

	);
}

export default App;
