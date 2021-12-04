import "../styles/User.css";

function User({ name }) {
  return (
    <div className="user">
      <img src="./profile.png" alt="user profile" />
      <p>{name}</p>
      <img src="./arrow-down.svg" alt="arrow down icon" />
    </div>
  );
}

export default User;
