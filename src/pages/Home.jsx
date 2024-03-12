import TitleComponent from '../components/TitleComponent';
import Paragraph from '../components/Paragraph';

const Home = () => {
  return (
    <div className="text-center p-0">
      <TitleComponent value="Explore the Rick and Morty Universe" />
      <h3 className="text-2xl mt-4 sm:mt-8 md:text-4xl">This app is an esential tool to all fans of this great series, it can display great content about Rick and Morty, including:</h3>
      <ul className="my-6 sm:my-10">
        <Paragraph
          title="Characters"
          text="A complete gallery of characters from the series. You can get a detailed information"
        />
        <Paragraph
          title="Episodes"
          text="Find information on episodes such as, season, episode and air date"
        />
        <Paragraph
          title="Locations"
          text="Discover every fascinating place visited by Rick and Morty in all their adventures and information about each location"
        />
      </ul>
    </div>
  );
};

export default Home;
