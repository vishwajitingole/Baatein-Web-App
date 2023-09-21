import React from 'react';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';


function ChatFeed(props) {
    const{ chats,activeChat,userName,messages}=props;

    //If there exist any chat it will show all the active chats
    const chat= chats &&chats[activeChat];

    const renderMessages=()=>{
        //Here we are giving keys to every message
        const keys=Object.keys(messages);
        return keys.map((key,index)=>{
        
        })

    }


  return (
    <div>ChatFeed</div>
  )
}

export default ChatFeed