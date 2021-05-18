import logo from './logo.svg';
import Block from './components/Block'
import Block2 from './components/Block2'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Block text="Reprehenderit cupidatat do ad nulla aute aliqua irure in officia." color="lime"/><br/>
      <Block2/><br/>
      <Block text="Reprehenderit fugiat duis ea eiusmod nulla ex laborum tempor Lorem irure cillum." color="yellow"/><br/>
      <Block text="Enim ea occaecat eiusmod sit fugiat." color="salmon"/><br/>
      <Block text="Fugiat in minim ea irure id ex cillum sunt ex labore pariatur pariatur." color="lightblue"/><br/>
      <Block2/><br/>
      <Block text="Velit velit cupidatat laboris mollit ullamco id aliquip enim consectetur laboris qui pariatur et cillum." color="gold"/><br/>
      <Block text="Cillum aute sit reprehenderit culpa ad voluptate elit cupidatat mollit sint eu voluptate elit sit." color="silver"/><br/>
    </div>
  );
}

export default App;
