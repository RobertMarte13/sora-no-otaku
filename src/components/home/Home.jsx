import { Link } from "react-router-dom";
import { data } from "../../services/databases.js";
import "../../style/styleHome.css";

const Home = () => {
  return (
    <div className="content-main">
      <br />
      <br />
      <h2>Lista de animes</h2>
      <br />

      <div className="box-episode">
        {data?.map((db, index) => (
          <Link to={`/anime/${db.title}`} key={index}>
            <div className="box-info-episodio">
              <img src={db.portada} alt={`Portada de${db.title}`} />
              <h2 className="title">{db.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
