import React, { Component } from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import MyNavLink from "./components/MyNavLink/MyNavLink";


export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1>React Router Show</h1>
                </div>
                <div className="main">
                    <div className="nav">
                        <ul>
                            {/* 自定义封装Link */}
                            <li><MyNavLink to='/About'>About</MyNavLink></li>
                            <li><MyNavLink to='/Home'>Home</MyNavLink></li>
                        </ul>
                    </div>
                    <div className="content">
                        {/*注冊路由*/}
                        <Switch>{/* 匹配到一个路由后不会继续往下匹配 */}
                            {/* 精准匹配，非必要不要开启，会影响嵌套路由 */}
                            <Route exact={true} path='/About' component={About}/>
                            <Route path='/Home' component={Home}/>
                            <Redirect to='/Home'/>{/* 未匹配到路由会默认走重定向的组件 */}
                        </Switch>
                        
                    </div>                 
                </div>
            </div>

        )
    }
}



