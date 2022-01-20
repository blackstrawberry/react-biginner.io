import { useEffect } from "react";
import { Link,useParams } from "react-router-dom";
function Detail() {
  const { id  } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>
      Detail
      </h1>
      <button><Link to="/movie">돌아가기</Link></button>
    </div>
    );
}
export default Detail;