import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import SideBar from "./component/SideBar";
import Posts from "./component/Posts";
import ChatBar from "./component/ChatBar";
import ChatBox from "./component/ChatBox";

function App() {
  const [state, setState] = React.useState(false);
  const [current, setCurrent] = React.useState({});
  const openChat = (user) => {
    setState(true);
    setCurrent(user);
  };
  const closeChat = () => {
    setState(false);
  };
  return (
    <div className="App">
      <Navbar />
      <div className="facebook">
        <SideBar />
        <Posts />
        <ChatBar openChat={openChat} />
        <ChatBox state={state} current={current} closeChat={closeChat} />
      </div>
    </div>
  );
}

export default App;