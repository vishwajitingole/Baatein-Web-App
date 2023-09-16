import React from 'react';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';

function ChatFeed(props) {
    console.log(props);
    const { chats, activeChat, userName, messages } = props;

    // Only if the chat is present this code will run
    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        // Every message that we store will have a unique key
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username; // Use '===' instead of '==' for comparison.

            return (
                <div className="" key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {isMyMessage ? (
                            <MyMessage message={message} />
                        ) : (
                            <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        )}
                    </div>
                    <div
                        className="read-reciepts"
                        style={{
                            marginRight: isMyMessage ? '0px' : '18px', // Corrected the '>' to '<' here
                            marginLeft: isMyMessage ? '68px' : '0px', // Corrected the '>' to '<' here
                        }}
                    ></div>
                </div>
            );
        });
    };

    return <div className='chat-feed' >
        <div className="chat-tittle-container">
            <div className="chat-title">{chat?.title//If there exist any chat it will show the title of the chart
            }</div>
            <div className="chat-subtitle">

            </div>
            {renderMessages()}
            <div style={{height:'100px'}} />
            <div className="message-form-container">
                <MessageForm{...props} chatId={activeChat} />
            </div>
        </div>
        </div>;
}

export default ChatFeed;
