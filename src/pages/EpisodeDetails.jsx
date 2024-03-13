import { useQuery } from "@apollo/client";
import { GET_EPISODE } from "../utils/querys";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import TitleComponent from "../components/TitleComponent";
import CharacterDescription from "../components/CharacterDescription";
import NavInDetails from "../components/NavInDetails";

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
          <div className="flex flex-col items-center mt-10">
            <CharacterDescription title="Chapter" value={data.episode.episode} />
            <CharacterDescription title="Air Date" value={data.episode.air_date} />
            <p className="mt-6 text-[#53bf23] text-2xl">Characters in this episode:</p>
            <div className="flex flex-wrap justify-center gap-10 mt-10">
              {data.episode.characters.map(character => (
                <NavInDetails
                  key={character.id}
                  to={`/character/${character.id}`}
                >
                  <CharacterDescription title="Name" value={character.name} />
                  <img
                    className="my-6"
                    src={character.image}
                    alt={character.name}
                  />
                </NavInDetails>
              ))}
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default EpisodeDetails;
