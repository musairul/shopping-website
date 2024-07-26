import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="centreTitle">
      <h1>An error occured</h1>
      <Link to="/">
        <button>Back to home</button>
      </Link>
    </div>
  );
}

export default Error;
