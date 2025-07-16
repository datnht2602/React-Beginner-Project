import { useState } from "react";

function Book({ title, author, description, subtitle, image }) {
  const [isRead, setIsRead] = useState(false);
  return (
    <div className="user-profile">
      <img src={image} alt={title}></img>
      <h2>Title: {title}</h2>
      <span>Subtitle: {subtitle}</span>
      <h3>Author: {author}</h3>
      <p>Description: {description}</p>
      <button
        onClick={() => {
          setIsRead(!isRead);
        }}
      >
        {isRead ? "Read" : "Unread"}
      </button>
    </div>
  );
}

export default Book;
