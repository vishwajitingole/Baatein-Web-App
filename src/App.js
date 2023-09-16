
import {ChatEngine} from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";


import './App.css';

function App() {
  return (
    <div className="App">
     <ChatEngine 
     height="100vh"
     projectID="cb0320f6-e39c-4061-a18f-779c41bf5d3e"
     userName="Vishwajit"
     userSecret="Vishwajit"
     renderChatFeed={
    (chatAppProps)=><ChatFeed{...chatAppProps}/>
    }
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

     />
    </div>
  );
}

export default App;
