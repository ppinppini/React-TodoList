import "./Header.css";
const Header = () => {
  const today = new Date();
  return (
    <div className="Header">
      <h2>오늘은 📅</h2>
      <h2>{today.toDateString()}</h2>
    </div>
  );
};

export default Header;
