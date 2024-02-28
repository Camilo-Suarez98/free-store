import Paragraph from '../components/Paragraph';

const Home = () => {
  return (
    <div className="text-center p-0">
      <h2 className="text-3xl text-[#53bf23] sm:text-4xl md:text-5xl min-[991px]:text-6xl">Explore Rick and Morty&apos;s Universe</h2>
      <h3 className="text-2xl mt-4 sm:mt-8 md:text-4xl">This app is a esential tool to all fans of this great serie, you can show a great content about Rick and Morty, including:</h3>
      <ul className="my-6 sm:my-10">
        <Paragraph
          title="Characters:"
          text="A complete gallery of characters from the serie. You can get a detailed information"
        />
        <Paragraph
          title="Episodes:"
          text="Find episode info like, season, chapter, and air date"
        />
        <Paragraph
          title="Locations:"
          text="Discover each fascinating place visited by Rick and Morty in all their adventures and information about each place"
        />
      </ul>
    </div>
  );
};

export default Home;
