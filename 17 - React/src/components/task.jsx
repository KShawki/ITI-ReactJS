import { Component } from "react";

class Task extends Component{
    constructor(){
        super()
        this.state={taskName:"react "}
    }
    // syntax Sugar
    // state={taskName:"react hhhhh"}
    render(){
        return <div>Task {this.state.taskName}</div>
    }
}
export default Task;