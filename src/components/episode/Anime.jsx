import "../../style/styleEpispdio.css";
import { data } from "../../services/databases.js";
import { Link, useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Anime = () => {
  let { name } = useParams();

  return (
    <>
      <div className="box-episodio">
        {data?.map((db, index) =>
          db.title === name ? (
            <div className="box-info-anime" key={index}>
              <div className="box-portada">
                <h2 className="title">{db.title}</h2>
                <br />
                <img
                  className="portada-caps"
                  src={`${db.portada}`}
                  alt={`portada de ${db.title}`}
                />
              </div>
              <div className="box-genero">
                <p>{db.genero_1}</p>
                <p>{db.genero_2}</p>
              </div>
              <div className="box-description">
                <h4>Descripción</h4>
                <p>{db.description}</p>
              </div>
              <div className="box-caps">
                <ul>
                  <li>
                    <Link to={`/capitulo/${db.id}`}>Capitulo #1</Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default Anime;
