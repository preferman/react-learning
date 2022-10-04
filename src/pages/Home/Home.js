import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink/MyNavLink'
import { Switch, Route, Redirect } from 'react-router-dom'
import './Home.css'
import New from './New/New'
import Message from './Message/Message'

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div>
                    <h2>我是Home的内容</h2>
                </div>
                <div className='home-nav'>
                    <ul>
                        <MyNavLink to='/Home/New'>News</MyNavLink>
                        <MyNavLink to='/Home/Message'>Messages</MyNavLink>
                    </ul>
                </div>
                <div className='home-content'>
                    <Switch>
                        <Route path='/Home/New' component={New}/>
                        <Route path='/Home/Message' component={Message}/>
                        <Redirect to='/Home/New'/>
                    </Switch>
                </div>


            </div>
        )
    }
}
