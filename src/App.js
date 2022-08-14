import logo from './logo.svg';
import './App.css';
import MainBox from './MainBox';
import ColorName from './ColorName';
import {useState} from "react" 

function App() {
  const [myColor, setMyColor] = useState("")


  return (
    <div className="App">
      <MainBox 
        myColor = {myColor}
      />
      <ColorName 
        myColor = {myColor}
        setMyColor = {setMyColor}
      />
    </div>
  );
}

export default App;
