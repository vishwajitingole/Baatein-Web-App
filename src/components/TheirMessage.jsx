import React from 'react'

function TheirMessage({lastMessage,message}) {
  const isFirstMessageByUser=!lastMessage || lastMessage.sender.username!==message.sender.username;

  return (
    <div>
      <div className="message-row">
        {isFirstMessageByUser && (
          <div className="message-avater" style={{backgroundImage:message.sender && 'url(${message.sender.avataar})'}}/>
            
           
        )}

          {message.attachment && message.attachments.length >0}

      </div>
    </div>
  )
}

export default TheirMessage