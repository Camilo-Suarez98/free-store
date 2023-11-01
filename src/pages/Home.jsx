const Home = () => {
  return (
    <div className="text-center p-0">
      <h2 className="text-4xl text-[#2a5fff]">Explore Rick and Morty&apos;s Universe</h2>
      <h3 className="text-2xl mt-4">This app is a esential tool to all fans of this great serie, you can show a great content about Rick and Morty, including:</h3>
      <ul className="my-6">
        <li>
          <p className="text-xl my-3">
            <strong className="text-[#2a5fff]">Characters: </strong>
            A complete gallery of characters from the serie. You can get a detailed information
          </p>
        </li>
        <li>
          <p className="text-xl my-3">
            <strong className="text-[#2a5fff]">Episodes: </strong>
            Find episode info like, season, chapter, and air date
          </p>
        </li>
        <li>
          <p className="text-xl my-3">
            <strong className="text-[#2a5fff]">Locations: </strong>
            Discover each fascinating place visited by Rick and Morty in all their adventures and information about each place
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Home