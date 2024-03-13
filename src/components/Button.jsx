const Button = ({
  margin = "",
  onClick,
  disabled,
  value
}) => {
  return (
    <button
      className={!disabled ? margin + ' cursor-pointer border-2 border-[#3c6a28] text-[#53bf23] transition duration-1000 hover:bg-[#53bf23] hover:border-white hover:text-white' : 'opacity-50'}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default Button;
