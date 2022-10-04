import React,{Component} from "react";
import axios from "axios";

export default class App extends Component {


    fetchStudents = () => {
        axios.get('/api/students').then(
            response => {console.log(response.data)},
            error => {console.log("发生了错误", error)}
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.fetchStudents}>点击获取学生数据</button>
                <button>点击获取汽车数据</button>                
            </div>
        )
    }
}