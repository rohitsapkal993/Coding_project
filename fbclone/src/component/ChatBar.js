import React from "react";

const ChatBar = (props) => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/1.jpg", name: "Rohit" },
    { id: 2, image: "/images/2.jpg", name: "Rushi" },
    { id: 3, image: "/images/3.jpg", name: "Akash" },
    { id: 4, image: "/images/4.jpg", name: "Tushar" },
    { id: 5, image: "/images/5.jpg", name: "Ankita" },
    { id: 6, image: "/images/6.jpg", name: "Pradip" },
    { id: 7, image: "/images/7.jpg", name: "Om" },
    { id: 8, image: "/images/8.jpg", name: "Omkar" },
    { id: 9, image: "/images/9.jpg", name: "Satya" },
    { id: 10, image: "/images/10.jpg", name: "Sameer" },
    { id: 11, image: "/images/11.jpg", name: "Sanket" },
  ]);
  const openChat = (user) => {
    props.openChat(user);
  };
  return (
    <div className="chatBar">
      {state.map((user) => (
        <div
          className="chatBar__list"
          key={user.id}
          onClick={() => openChat(user)}
        >
          <div className="chatBar__list-img">
            <img src={user.image} alt="user" />
            <span className="status"></span>
          </div>
          <div className="chatBar__list-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBar;