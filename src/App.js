
import './App.css';
import { Navbar } from './components/navbar';
import { Container } from './components/container';
import {CreateFlashcard} from './page/HomePage';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Container/>
     <CreateFlashcard/>
    </div>
  );
}

export default App;
