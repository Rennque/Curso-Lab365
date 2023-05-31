import './styles/App.css';
import download from './image/download.png';
import Header from './components/Header.js';

function App() {

  function soma(a, b){
    return a+b;
  }
  
  
  return (
    <div className="App">
      <Header className='header'/>
      <img src={download}></img>
      <p> A soma é {soma(2, 3)}</p>
      <button>Limpar</button>
    </div>
  );
}

export default App;
