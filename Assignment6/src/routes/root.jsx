import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Dizzy Dev Unsplash Gallery</h1>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Stats go here</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Author Data goes here</a>
            </li>
          </ul>
        </nav>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div class="main">
        <div class="search">
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <Link to="/query">
            <button type="submit">Query</button>
          </Link>
          <Link to="/random">
            {/* <button onClick={randomPhoto}> Random</button> */}
            <button type="submit">Random</button>
          </Link>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}
