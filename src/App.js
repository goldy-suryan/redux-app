import Contacts from './components/contacts/Contacts';
import Navbar from './components/nav/Navbar';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Contacts />
    </div>
  );
}

export default App;
