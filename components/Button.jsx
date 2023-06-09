const Button = ({ type, style, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`hero_btn cursor-pointer ${
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
