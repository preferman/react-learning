import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import Detail from './Detail/Detail';
import './Message.css'

export default class Message extends Component {

    state = {
        messageList: [
            { id: '1', title: 'message1' },
            { id: '2', title: 'message2' },
            { id: '3', title: 'message3' }
        ]
    };

    pushShow = (id,title) => {
        this.props.history.push(`/Home/Message/Detail`, {id:id,title:title});
    }

    replaceShow = (id,title) => {
        this.props.history.replace(`/Home/Message/Detail`, {id:id,title:title});
    }

    render() {
        const messageList = this.state.messageList;

        return (

            <div className='message'>
                <div className='item-list'>
                    <ul>
                        {
                            messageList.map(item => {
                                //开启repalce模式，后hostory不会留下历史记录
                                return (
                                    <li key={item.id}>
                                        <Link replace to={{pathname:'/Home/Message/Detail', state:{id:item.id,title:item.title}}}>{item.title}</Link>
                                        <button onClick={() => {this.pushShow(item.id, item.title)}}>push查看</button>
                                        <button onClick={() => {this.replaceShow(item.id, item.title)}}>replace查看</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='item-detail'>
                    <Route path='/Home/Message/Detail' component={Detail}/>
                    {/* <Route path='/Home/Message/Detail/:id/:title' component={Detail}/> */}
                </div>

            </div>
        )
    }
}
