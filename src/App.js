import './App.css';
import AllRouters from './components/AllRouters';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
     {/* <h1>Fire Base Authentication</h1> */}
     <AllRouters/>
    </div>
  );
}

export default App;
