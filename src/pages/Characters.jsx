import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Button from '../components/Button';

const GET_CHARACTERS = gql`
  query getCharaters($page: Int!) {
    characters(page: $page) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        status
        image
        gender
      }
    }
  }
`;

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
        variables: { page: pageNum + 1 }
      })
    }
  };

  const showLessCharacters = () => {
    if (data.characters.info.prev) {
      setPageNum(pageNum - 1);
      fetchMore({
        variables: { page: pageNum - 1 }
      })
    }
  };

  return (
    <div>
      <h2 className='text-2xl'>Click on your favorite character to view details</h2>
      <div className='flex flex-wrap justify-center gap-10 mt-10'>
        {data.characters.results.map(({ id, name, status, image, gender }) => {
          return (
            <Link
              to={`/character/${id}`}
              key={id}
              className='border-2 border-[#3c6a28] text-[#53bf23] cursor-pointer p-4 rounded-lg transition duration-1000 hover:bg-[#abfa88] hover:text-white hover:text-bold'
            >
              <h2 className='text-2xl my-2 overflow-hidden text-ellipsis whitespace-nowrap'>{name}</h2>
              <h3 className={status === 'Alive' ? 'text-green-500 text-xl' : status === 'unknown' ? 'text-gray-500 text-2xl' : 'text-red-500 text-2xl'}>{status}</h3>
              <p className='text-xl my-2'>{gender}</p>
              <img
                src={image}
                alt={name}
                className='rounded-lg'
              />
            </Link>
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
