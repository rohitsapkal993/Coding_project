import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/1.jpg", name: "Flutter Development" },
    { id: 2, image: "/images/2.jpg", name: "PHP Development" },
    { id: 3, image: "/images/3.jpg", name: "React Native Development" },
    { id: 4, image: "/images/4.jpg", name: "Node JS Development" },
  ]);
  return (
    <div className="stories">
      {state.map((story) => (
        <div className="stories__col" key={story.id}>
          <div className="stories__body">
            <img src={story.image} alt="stories" />
            <div className="stories__body-overlay">
              <div className="stories__body-overlay-img">
                <img src={story.image} alt="" />
              </div>
              <div className="stories__body-name">{story.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;