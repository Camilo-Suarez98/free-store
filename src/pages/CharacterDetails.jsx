import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import CharacterDescription from '../components/CharacterDescription';

const GET_CHARACTER = gql`
  query getCharater($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      origin {
        name
      }
      location {
        name
      }
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;

const CharacterDetails = () => {
  const { id } = useParams();

  const options = {
    variables: { id }
  };

  const { loading, error, data } = useQuery(GET_CHARACTER, options);

  if (loading) return <Loader />;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {
        data && (
          <div
            className="flex flex-col items-center"
          >
            <h2
              className="text-3xl text-[#53bf23] my-6 sm:text-4xl md:text-5xl min-[991px]:text-6xl"
            >
              {data.character.name}
            </h2>
            <img
              className="rounded-3xl my-5"
              src={data.character.image}
              alt={data.character.name}
            />

            <CharacterDescription title="Specie" value={data.character.species} />
            <CharacterDescription title="Status" value={data.character.status} />
            <CharacterDescription title="Origin" value={data.character.origin.name} />
            <CharacterDescription title="Location" value={data.character.location.name} />

            <h3 className="text-3xl my-6 text-[#53bf23]">Episodes and air date</h3>
            <ol className="list-decimal">
              {data.character.episode.map(({ id, name, air_date, episode }) => (
                <li key={id}>{episode}: {name} - {air_date}</li>
              ))}
            </ol>
          </div>
        )
      }
    </div>
  );
};

export default CharacterDetails;
