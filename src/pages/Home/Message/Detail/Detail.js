import React, { Component } from 'react'


let itemDetailList = [
   { id: '1', title: 'message1' , content: '你好'},     
   { id: '2', title: 'message2' , content: '我不号'},     
   { id: '3', title: 'message3' , content: '随便'}     
];
export default class Detail extends Component {

    render() {

        console.log(this.props);



        //const {id, title} = this.props.match.params;
        const data = this.props.location.state || {};

        const itemDetail = itemDetailList.find(item => {
            return item.id === data.id;
        }) || {};

        return (
            <div>
                <ul>
                    <li>消息id：{itemDetail.id}</li>
                    <li>消息title：{itemDetail.title}</li>
                    <li>消息content：{itemDetail.content}</li>
                </ul>
            </div>
        )
    }
}
