import React,{Component} from "react";
import Hello from "./components/Hello/Hello";
import Welcome from "./components/Welcom/Welcom";


export default class App extends Component {
    render() {
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}