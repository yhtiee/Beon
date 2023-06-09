const Button = ({ type, style }) => {
  return (
    <button
      className={`hero_btn ${
        style == "primary"
          ? "bg-[#00EF8B] text-[black]"
          : "bg-[transparent] border-solid  border-[1px] border-[#00FF8B]"
      }`}
    >
      {type}
    </button>
  );
};
export default Button;
