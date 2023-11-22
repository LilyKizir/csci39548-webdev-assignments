import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to About component */}
          <Link to="/csci39548-webdev-assignments/Assignment6/build/random">Click to go to the Random page</Link>
        </li>
        <li>
          {/* Endpoint to route to Home component */}
          <Link to="/csci39548-webdev-assignments/Assignment6/build/query">Click to go to the Query Page</Link>
        </li>
      </ul>
    </>
  );
}
