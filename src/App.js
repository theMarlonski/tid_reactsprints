import './App.css';
import IconImg from "./Ressources/Icons/NotificationBell.svg"
import Tags from './components/Tags.js';

function App() {
  return (
    <div className="App">
      <Tags
        tags={["#tag1", "#tag2", "#tag3", "#tag4"]}
        />
    </div>
  );
}
export default App;
