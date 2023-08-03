import { useParams } from "react-router-dom";
import { data } from "../../services/databases";

const VideoCaps = () => {
  let { idVideo } = useParams();

  const video = data?.find((db) => db.id === parseInt(idVideo));

  console.log(typeof parseInt(idVideo))
  console.log(video)

  return (
    <div style={{background: 'gray'}}>
      <iframe
        className="caps-videos"
        src={video.capitulos.cap_1}
        frameBorder="0"
        allowfullscreen
      />
    </div>
  );
};

export default VideoCaps;
