import React from 'react';

function TheirMessage({ lastMessage, message }) {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{
            backgroundImage: message.sender && `url(${message.sender.avatar})`,
          }}
        />
      )}

      {message.attachment && message.attachments.length > 0 && (
        <img
          src={message.attachment}
          alt="Message Attachment"
          className="message-image"
        />
      )}

      {message.text && (
        <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC' }}>
          {message.text}
        </div>
      )}
    </div>
  );
}

export default TheirMessage;
