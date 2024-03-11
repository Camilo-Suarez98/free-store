const CharacterDescription = ({ title, value }) => {
  return (
    <p className="text-2xl">
      <span className="text-[#53bf23] my-4">{title}: </span> {value}
    </p>
  );
};
export default CharacterDescription;
