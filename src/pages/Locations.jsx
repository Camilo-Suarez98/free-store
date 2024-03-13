import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../utils/querys";
import TitleComponent from "../components/TitleComponent";
import Loader from '../components/Loader';
import Button from "../components/Button";
import NavInDetails from "../components/NavInDetails";

const Locations = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, data, fetchMore } = useQuery(GET_LOCATIONS, {
    variables: { page: pageNumber }
  });

  if (loading) return <Loader />;
  if (error) return `Error: ${error.message}`;

  const showMoreLocations = () => {
    setPageNumber(pageNumber + 1);
    fetchMore({
      variables: { page: pageNumber }
    });
  };

  const showLessLocations = () => {
    setPageNumber(pageNumber - 1);
    fetchMore({
      variables: { page: pageNumber }
    })
  };

  return (
    <div>
      <TitleComponent value="Locations" />
      <h2 className='text-2xl mt-6'>Click on any location to view details</h2>
      <div className="grid grid-cols-1 mt-6 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {data.locations.results.map(({ id, name, type }) => (
          <NavInDetails
            key={id}
            to={`/location/${id}`}
          >
            <h2 className='text-2xl my-2 overflow-hidden text-ellipsis whitespace-nowrap'>{name}</h2>
            <p className='text-xl my-2 text-white'>
              <span className="font-black text-[#53bf23]">Type:</span> {type}
            </p>
          </NavInDetails>
        ))}
      </div>
      <div className='mt-8'>
        <Button
          value="Shore less"
          margin='mr-3'
          onClick={showLessLocations}
          disabled={!data.locations.info.prev}
        />
        <Button
          value="Show more"
          margin='ml-3'
          onClick={showMoreLocations}
          disabled={!data.locations.info.next}
        />
      </div>
    </div>
  );
};

export default Locations;
