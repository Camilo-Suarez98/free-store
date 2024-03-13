const Paragraph = ({ title, text }) => {
  return (
    <li>
      <p className="text-xl my-3 md:text-3xl min-[991px]:text-4xl">
        <span className="text-[#53bf23]">{title}: {" "}</span>
        {text}
      </p>
    </li>
  );
};

export default Paragraph;
