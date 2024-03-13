import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../utils/querys";
import TitleComponent from "../components/TitleComponent";
import Loader from "../components/Loader";
import { useState } from "react";
import Button from "../components/Button";
import NavInDetails from "../components/NavInDetails";

const Episodes = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, data, fetchMore } = useQuery(GET_EPISODES, {
    variables: { page: pageNumber }
  });

  if (loading) return <Loader />;
  if (error) return `Error: ${error.message}`;

  const showMoreChapters = () => {
    setPageNumber(pageNumber + 1);
    fetchMore({
      variables: { page: pageNumber }
    });
  }

  const showLessChapters = () => {
    setPageNumber(pageNumber - 1);
    fetchMore({
      variables: { page: pageNumber }
    })
  }

  return (
    <div>
      <TitleComponent value="Episodes" />
      <h2 className='text-2xl mt-6'>Click on any episode to view details</h2>
      <div className="grid grid-cols-1 mt-6 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {data.episodes.results.map(({ id, name, air_date, episode }) => (
          <NavInDetails
            key={id}
            to={`/episode/${id}`}
          >
            <p className='text-xl my-2 text-white'>{episode}</p>
            <h2 className='text-2xl my-2 overflow-hidden text-ellipsis whitespace-nowrap'>{name}</h2>
            <p className='text-xl my-2 text-white'>{air_date}</p>
          </NavInDetails>
        ))}
      </div>
      <div className='mt-8'>
        <Button
          value="Shore less"
          margin='mr-3'
          onClick={showLessChapters}
          disabled={!data.episodes.info.prev}
        />
        <Button
          value="Show more"
          margin='ml-3'
          onClick={showMoreChapters}
          disabled={!data.episodes.info.next}
        />
      </div>
    </div>
  );
};

export default Episodes;
