import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

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
          <div>
            <h2>{data.character.name}</h2>
          </div>
        )
      }
    </div>
  );
};

export default CharacterDetails;
