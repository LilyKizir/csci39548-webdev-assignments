import {Link } from "react-router-dom";


export default function Root() {
    return (
      <>
        <h1>Home Page</h1>
            <br />
            <ul>
                <li>
                    {/* Endpoint to route to About component */}
                    <Link to="/Random">Click to go to the Random page</Link>
                </li>
                <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/Query">Click to go to the Query Page</Link>
                </li>
            </ul>
      </>
  );
}