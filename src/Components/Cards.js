import React from "react";

import "./Cards.css";

const Cards = (props) => {
  const popUpHandler = (name, location, source) => {
    props.setName(name);
    props.setLocation(location);
    props.setSource(source);
    props.setIsModal(true);
  };

  return (
    <div className="gallery">
      {props.items.map((item) => (
        <div
          onClick={() =>
            popUpHandler(item.user.name, item.user.location, item.urls.regular)
          }
          key={item.id}
          className="container"
        >
          <img src={item.urls.regular} alt="" />
          <div className="underlay"></div>
          <div className="image-caption">
            <p className="user-name">{item.user.name}</p>
            <p className="user-location">{item.user.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
