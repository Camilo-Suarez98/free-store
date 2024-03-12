import { useQuery } from "@apollo/client";
import { GET_EPISODE } from "../utils/querys";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import TitleComponent from "../components/TitleComponent";
import CharacterDescription from "../components/CharacterDescription";

const EpisodeDetails = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_EPISODE, {
    variables: { id }
  });

  if (loading) return <Loader />;
  if (error) return `Error: ${error.message}`;
  console.log({ data });

  return (
    <div>
      {data &&
        <>
          <TitleComponent value={data.episode.name} />
          <div className="flex flex-col items-center">
            <CharacterDescription title="Chapter" value={data.episode.episode} />
          </div>
        </>
      }
    </div>
  );
};

export default EpisodeDetails;
