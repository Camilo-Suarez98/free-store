import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import CharacterDescription from '../components/CharacterDescription';
import { GET_CHARACTER } from "../utils/querys";
import TitleComponent from "../components/TitleComponent";
import NavInDetails from "../components/NavInDetails";

const CharacterDetails = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id }
  });

  if (loading) return <Loader />;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {
        data && (
          <div className="flex flex-col items-center">
            <TitleComponent value={data.character.name} />

            <img
              className="rounded-3xl my-10"
              src={data.character.image}
              alt={data.character.name}
            />

            <CharacterDescription title="Specie" value={data.character.species} />
            <CharacterDescription title="Status" value={data.character.status} />
            <CharacterDescription title="Origin" value={data.character.origin.name} />
            <CharacterDescription title="Location" value={data.character.location.name} />

            <h3 className="text-3xl my-6 text-[#53bf23]">Episodes and air date</h3>
            <ol className="list-decimal">
              {data.character.episode.map(({ id, name, episode }) => (
                <li key={id} className="my-12">
                  <NavInDetails to={`/episode/${id}`}>
                    {episode}: <span className="text-[#53bf23]">{name}</span>
                  </NavInDetails>
                </li>
              ))}
            </ol>
          </div>
        )
      }
    </div>
  );
};

export default CharacterDetails;
