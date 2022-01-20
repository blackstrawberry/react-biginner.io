import {useState} from "react";
import {Link} from "react-router-dom";

function Home() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos(currentArray => [toDo, ...currentArray]);
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder='Write your to do...'/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
      <button><Link to="/movie">영화</Link></button>
      <button><Link to="/cointracker">코인트랙커</Link></button>
      <button><Link to="/detail">디테일</Link></button>
    </div>
  );
}
export default Home;