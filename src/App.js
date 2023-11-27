// import logo from './logo.svg';
import './App.css';
import FieldKeyword from './conponents/Fieldkeyword';
import Google from './conponents/Googlekeywords';
// import axios from 'axios';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return <div className="App">
          <FieldKeyword/>
          <Google></Google>
  
        </div>
         
}

export default App;
