import Contacts from './components/contacts/Contacts';
import Navbar from './components/nav/Navbar';
import './scss/App.scss';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
