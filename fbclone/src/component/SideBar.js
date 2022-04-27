import React, { useState } from "react";

const SideBar = () => {
  const [state, setState] = useState([
    { id: 1, image: "/images/1.jpg", name: "Flutter Development" },
    { id: 2, image: "/images/2.jpg", name: "PHP Development" },
    { id: 3, image: "/images/3.jpg", name: "React Native Development" },
    { id: 4, image: "/images/4.jpg", name: "Node JS Development" },
    { id: 5, image: "/images/5.jpg", name: "Vue JS Development" },
    { id: 6, image: "/images/6.jpg", name: "React Development" },
  ]);
  return (
    <div className="sidebar">
      {state.map((info) => (
        <div className="sidebar__list" key={info.id}>
          <div className="sidebar__list-img">
            <img src={info.image} alt="group image" />
          </div>
          <div className="sidebar__list-name">{info.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;