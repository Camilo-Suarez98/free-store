import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'

const Characters = () => {
  const GET_CHARACTERS = gql`
    query {
      characters {
        results {
          id
          name
          status
          image
          gender
        }
      }
    }
  `

  const { loading, error, data } = useQuery(GET_CHARACTERS)

  if (loading) {
    return (
      <div className="loader">
        Loading
        <span></span>
      </div>
    )
  }

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h2 className='text-xl'>Click on your favorite character to view details</h2>
      <div className='flex flex-wrap justify-center gap-10 mt-10'>
        {data.characters.results.map(({ id, name, status, image, gender }) => {
          return (
            <Link
              to={`/character/${id}`}
              key={id}
              className='border-2 border-[#2a52c9] text-[#2a5fff] cursor-pointer p-4 rounded-lg transition duration-500 hover:bg-[#2a5fff] hover:text-white hover:text-bold'
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
    </div>
  )
}

export default Characters