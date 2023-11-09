import { useState } from "react";

export default function Gallery() {
  const [pictureData, setPictureData] = useState({
    title: null,
    url: null,
    explanation: null,
    username: null,
    userLink: null,
  });
  const [query, setQuery] = useState("food");
  const [imgId, setImgId] = useState(null);
  const [loadedImage, setLoadedImage] = useState(false);
  const [clickedStatsBtn, setClickedStatsBtn] = useState(false);
  const [stats, setStats] = useState({
    downloads: null,
    downloadsLastThirty: null,
    likes: null,
    views: null,
    viewsLastThirty: null,
  });
  const [userID, setUserID] = useState(null);
  const [userData, setUserData] = useState(null);
  const [clickedUserData, setClickedUserData] = useState(false);
  const endpoint =
    "https://api.unsplash.com/photos/random?client_id=IZmoCbCGKKTr4fDIWDH1SObu3dr3PJaG4h6aeJfO75I&query=";

  function randomPhoto() {
    fetch(
      "https://api.unsplash.com/photos/random?client_id=7B3CH3BWU0rb1zCMN4-CEVShZygiksQztkwJPa0R7mo"
    )
      .then((response) => response.json())
      .then((json) => {
        setPictureData({
          title: json.alt_description,
          url: json.urls.regular,
          explanation: json.description,
          username: "Picture by: " + json.user.name,
          userLink: json.user.links.html,
        });
        setImgId(json.id);
        setLoadedImage(true);
        setClickedStatsBtn(false);
      });
  }

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function handleGetPictureClick() {
    fetch(endpoint + query)
      .then((response) => response.json())
      .then((json) => {
        setPictureData({
          title: json.alt_description,
          url: json.urls.regular,
          explanation: json.description,
          username: "Picture by: " + json.user.name,
          userLink: json.user.links.html,
        });
        setImgId(json.id);
        setLoadedImage(true);
        setClickedStatsBtn(false);
      })
      .catch((error) => console.error(error));
  }
  let getStats = () => {
    fetch(`https://api.unsplash.com/photos/${imgId}/statistics`, {
      headers: {
        Authorization: "Client-ID 7B3CH3BWU0rb1zCMN4-CEVShZygiksQztkwJPa0R7mo",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setClickedStatsBtn(true);
        setStats({
          downloads: json.downloads.total,
          downloadsLastThirty: json.downloads.historical.change,
          likes: json.likes.total,
          views: json.views.total,
          viewsLastThirty: json.views.historical.change,
        });
      })
      .catch((error) => console.log(error));
  };

  let getUserData = () => {
    fetch(`https://api.unsplash.com/users/${userID}`, {
      headers: {
        Authorization: "Client-ID 7B3CH3BWU0rb1zCMN4-CEVShZygiksQztkwJPa0R7mo",
      },
    })
      .then((response) => response.json())
      .then((userData) => {
        setClickedUserData(true);
        setUserData(userData); // Set the user data in the state
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h2>Get Random Photo</h2>
      <button onClick={randomPhoto}> Generate</button>
      <hr />
      <h2>Random Photo with Query</h2>
      <label>
        Generate Picture with Query:
        <input onChange={handleQueryChange} value={query} />
      </label>
      <button onClick={handleGetPictureClick}>Get Picture</button>
      <br></br>
      <img src={pictureData.url} alt={pictureData.explanation} />
      <h2>{pictureData.title}</h2>
      <p>{pictureData.explanation}</p>
      <a href={pictureData.userLink}>{pictureData.username}</a>
      {loadedImage && (
        <div>
          <hr />
          <h2>Get Image Statistics</h2>
          <button onClick={getStats}>Get Stats</button>
          {clickedStatsBtn && (
            <ul>
              <li>Total Downloads: {stats.downloads}</li>
              <li>
                Downloads in the last 30 days: {stats.downloadsLastThirty}
              </li>
              <li>Total Likes: {stats.likes}</li>
              <li>Total Views: {stats.views}</li>
              <li>Views in the last 30 days: {stats.viewsLastThirty}</li>
            </ul>
          )}
          <div>
            <hr />
            <h2>Get Image Author Data</h2>
            <button onClick={getUserData}>Get Author Data</button>
            {clickedUserData && (
              <div>
                <h2>User Details</h2>
                <p>Username: {userData.username}</p>
                <p>Name: {userData.name}</p>
                <p>Location: {userData.location}</p>
                <p>Bio: {userData.bio}</p>
                <p>Total photos: {userData.total_photos}</p>
                <p>Total followers: {userData.followers_count}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
