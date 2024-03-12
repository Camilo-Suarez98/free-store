import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../utils/querys";
import { Link } from "react-router-dom";
import TitleComponent from "../components/TitleComponent";
import Loader from "../components/Loader";
import { useState } from "react";
import Button from "../components/Button";

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
      <div className="grid grid-cols-1 mt-6 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {data.episodes.results.map(({ id, name, air_date, episode }) => (
          <Link
            key={id}
            to={`/episode/${id}`}
            className="border-2 border-[#3c6a28] text-[#53bf23] w-8/12 m-auto cursor-pointer p-4 rounded-lg transition duration-1000 hover:bg-[#abfa88] hover:text-[#53bf23] hover:text-bold min-[320px]:w-8/12 min-[520px]:w-full"
          >
            <p className='text-xl my-2 text-white'>{episode}</p>
            <h2 className='text-2xl my-2 overflow-hidden text-ellipsis whitespace-nowrap'>{name}</h2>
            <p className='text-xl my-2 text-white'>{air_date}</p>
          </Link>
        ))}
      </div>
      <div className='mt-8'>
        <Button
          value="Shore less"
          margin='mr-3'
          onClick={showLessChapters}
        />
        <Button
          value="Show more"
          margin='ml-3'
          onClick={showMoreChapters}
        />
      </div>
    </div>
  );
};

export default Episodes;
