import Likecard from "./components/Likecard";
import style from "./app.module.css";

function App() {
  return (
    <>
      <div className={style.container}>
        <Likecard name="Hannah" />
        <Likecard name="Layla" />
        <Likecard name="Mark" />
        <Likecard name="Victor" />
        <Likecard name="Merlin" />
        <Likecard name="Peter" />
      </div>
    </>
  );
}

export default App;
