import { useState } from "react";
import style from "./likecard.module.css";

function Likecard({ name }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className={style.container}>
      <p>{name}</p>
      <p>{likes} ❤️</p>
      <button onClick={handleLike}>Like 👍</button>
    </div>
  );
}

export default Likecard;