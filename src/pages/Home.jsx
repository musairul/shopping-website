import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="centreTitle">
      <h1>Home</h1>
      <h2>Welcome to Shopping Site!</h2>
      <Link to="/shop">
        <button>Shop now!</button>
      </Link>
    </div>
  );
}

export default Home;
