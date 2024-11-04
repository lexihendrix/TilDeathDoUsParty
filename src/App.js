import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home } from './components/Home';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { RSVP } from './components/RSVP';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Home/>
    <Location/>
    <RSVP/>
    <Footer/>
    </div>
  );
}

export default App;