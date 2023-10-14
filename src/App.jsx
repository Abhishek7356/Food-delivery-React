import './App.css';
import Menu from './components/Menu/Menu';
import Popup from './components/Popup/Popup';
import AppContext from './context/AppContext';

function App() {
  return (
    <div className="App">
      <AppContext>
        <Menu />
      </AppContext>
    </div>
  );
}

export default App;
