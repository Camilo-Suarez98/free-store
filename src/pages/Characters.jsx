import { useQuery } from '@apollo/client';
import { useState } from 'react';
import Loader from '../components/Loader';
import Button from '../components/Button';
import TitleComponent from '../components/TitleComponent';
import NavInDetails from '../components/NavInDetails';
import { GET_CHARACTERS } from '../utils/querys';

const Characters = () => {
  const [pageNum, setPageNum] = useState(1);

  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page: pageNum }
  });

  if (loading) return <Loader />;
  if (error) return <p>Error : {error.message}</p>;

  const showMoreCharacters = () => {
    if (data.characters.info.next) {
      setPageNum(pageNum + 1);
      fetchMore({
        variables: { page: pageNum }
      })
    }
  };

  const showLessCharacters = () => {
    if (data.characters.info.prev) {
      setPageNum(pageNum - 1);
      fetchMore({
        variables: { page: pageNum }
      })
    }
  };

  return (
    <div>
      <TitleComponent value="Characters" />
      <h2 className='text-2xl mt-6'>Click on your favorite character to view details</h2>
      <div className='flex flex-wrap justify-center gap-10 mt-10'>
        {data.characters.results.map(({ id, name, status, image, gender }) => {
          return (
            <NavInDetails
              to={`/character/${id}`}
              key={id}
            >
              <h2 className='text-2xl my-2 overflow-hidden text-ellipsis whitespace-nowrap'>{name}</h2>
              <h3 className={status === 'Alive' ? 'text-green-500 text-xl' : status === 'unknown' ? 'text-gray-500 text-2xl' : 'text-red-500 text-2xl'}>{status}</h3>
              <p className='text-xl my-2'>{gender}</p>
              <img
                src={image}
                alt={name}
                className='rounded-lg'
              />
            </NavInDetails>
          )
        })}
      </div>
      <div className='mt-8'>
        <Button
          onClick={showLessCharacters}
          disabled={!data.characters.info.prev}
          value="Prev"
          margin='mr-3'
        />
        <Button
          onClick={showMoreCharacters}
          disabled={!data.characters.info.next}
          value="Next"
          margin='ml-3'
        />
      </div>
    </div>
  );
};

export default Characters;
