// import logo from "./logo.svg";
import Users from "../components/Users";
import Task from "../components/task";
import User from "../components/user";
import "./App.css";
import { Fragment } from "react";


var namee = "React 1";
// const objStyle={backgroundColor:"red", color:"white"}
function App() {
  return (
    // Syntaxsugar
    // <>
    <div className="App">
      <Task></Task>
   <Users></Users>
    {/* <input/> */}
    </div>
    // {/* <Fragment */}
    // {/* <div class=></div> */}
    // {/* <label htmlFor="in1">Name: </label>
    // <input id="in1" type="text"/>
    //   <div style={{backgroundColor:"red", color:"white"}} className="App">hello G1 {namee.toLocaleLowerCase()}</div>
    //   <div className="App">hi G1 {namee.toLocaleLowerCase()}</div> */}
    // </>
  );
}

export default App;
