import { useSelector } from "react-redux";

const Header = () => {

  const user = useSelector(state => state.user)

  return (
    <header>
      <div className="logo">Edvora</div>
      <div className="user-info">
        <h2>{user.name}</h2>
        <img src={user.url} alt="user profile picture" />
      </div>
    </header>
  );
};

export default Header;
