import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { animals } from './data.js';

function App() {
  return (
    <div className="App">
      <Header greeting='Welcome!'/>
      <Main animals={ animals }/>
      <Footer email='notanemail@gmail.com'/>
    </div>
  );
}

export default App;
