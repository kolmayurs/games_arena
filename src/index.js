import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Editor from './components/Editor';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


ReactDOM.render(
	<Provider store={store}>
	<Router>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/editor" component={Editor} />
			<Route path="/platform/:platform" component={App} />
			<Route path="/r/:redirectUrl" component={App} />
		</Switch>
	</Router>
	</Provider>, document.getElementById('root'));

