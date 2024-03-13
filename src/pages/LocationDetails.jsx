import { useQuery } from "@apollo/client";
import { GET_LOCATION } from "../utils/querys";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import TitleComponent from "../components/TitleComponent";
import CharacterDescription from "../components/CharacterDescription";
import NavInDetails from "../components/NavInDetails";

const LocationDetails = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_LOCATION, {
    variables: { id }
  });

  if (loading) return <Loader />;
  if (error) return `Error: ${error.message}`

  console.log({ data });

  return (
    <div>
      {data &&
        <>
          <TitleComponent value={data.location.name} />
          <div className="flex flex-col items-center mt-10">
            <CharacterDescription title="Type" value={data.location.type} />
            <CharacterDescription title="Dimension" value={data.location.dimension} />
            <p className="mt-6 text-[#53bf23] text-2xl">Residents in this location:</p>
            <div className="flex flex-wrap justify-center gap-10 mt-10">
              {data.location.residents.map(({ id, name, image }) => (
                <NavInDetails
                  key={id}
                  to={`/character/${id}`}
                >
                  <p className="text-[#53bf23] text-2xl">{name}</p>
                  <img
                    className="my-6"
                    src={image}
                    alt={name}
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

export default LocationDetails;
