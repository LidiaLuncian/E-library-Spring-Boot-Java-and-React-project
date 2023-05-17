import './App.css';
import React, {Component} from "react";
import ELibrary from "./components/E-library";
import './bootstrap.css';

class App extends Component{
  render(){
    return (
        <div className="App">
          <ELibrary/>
        </div>
    );
  }
}


export default App;
