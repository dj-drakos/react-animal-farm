import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header greeting='Welcome!'/>
      <Main />
      <Footer email='notanemail@gmail.com'/>
    </div>
  );
}

export default App;
