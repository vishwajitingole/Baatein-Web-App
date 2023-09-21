import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './Components/ChatFeed';

function App() {
  return (
    <div className="App">
      
        <ChatEngine
        height="100vh"
        projectID="d0b1fd21-68ea-42dd-b1cb-c20269aeb8f6"
        userName="Vishwajit"
        userSecret="Vishwajit"
        renderChatFeed={(chatAppProps)=><ChatFeed  {...chatAppProps} />}
        onNewMessage={()=>new Audio('https://chat-engine-assests.s3.amazonaws.com/click.mp3').play()}
        />

      
    </div>
  )
};

export default App;
