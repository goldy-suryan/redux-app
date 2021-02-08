import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import Navbar from './components/nav/Navbar';
import './scss/App.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route path={"/contacts/add" | "/contacts/edit/:id"} component={AddContact} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
