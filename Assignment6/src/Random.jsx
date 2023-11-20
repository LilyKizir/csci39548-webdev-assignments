import { useState } from "react";

function MyUserData({ userData }) {
  return (
    <div>
      <h2>User Details</h2>
      <p>Username: {userData.username}</p>
      <p>Name: {userData.name}</p>
      <p>Location: {userData.location}</p>
      <p>Bio: {userData.bio}</p>
      <p>Total photos: {userData.total_photos}</p>
      <p>Total followers: {userData.followers_count}</p>
    </div>
  );
}

function MyStats({ stats }) {
  return (
    <ul>
      <li>Total Downloads: {stats.downloads}</li>
      <li>Downloads in the last 30 days: {stats.downloadsLastThirty}</li>
      <li>Total Likes: {stats.likes}</li>
      <li>Total Views: {stats.views}</li>
      <li>Views in the last 30 days: {stats.viewsLastThirty}</li>
    </ul>
  );
}

export default function Random() {
  const [pictureData, setPictureData] = useState({
    title: null,
    url: null,
    explanation: null,
    username: null,
    userLink: null,
  });
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
        setUserID(json.user.username);
        setLoadedImage(true);
        setClickedStatsBtn(false);
        setClickedUserData(false);
      });
  }

  let getStats = () => {
    fetch(`https://api.unsplash.com/photos/${imgId}/statistics`, {
      headers: {
        Authorization: "Client-ID IZmoCbCGKKTr4fDIWDH1SObu3dr3PJaG4h6aeJfO75I",
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
      <div class="generator d-flex m-4 justify-content-center">
        <div>
          <h2>Get Random Photo</h2>
          <button onClick={randomPhoto}> Generate</button>
        </div>
      </div>

      <hr />

      <div class="d-flex flex-column align-items-center">
        <div>
          <img
            class="img-fluid"
            src={pictureData.url}
            alt={pictureData.explanation}
            style={{ height: "500px" }}
          />
        </div>

        <h2>{pictureData.title}</h2>
        <p>{pictureData.explanation}</p>
        <a href={pictureData.userLink}>{pictureData.username}</a>

        <div>
          <hr />
          {loadedImage && (
            <div class="d-flex m-5 justify-content-center">
              <div class="m-5 col-6">
                <h2>Get Image Statistics</h2>
                <button onClick={getStats}>Get Stats</button>
                {clickedStatsBtn && <MyStats stats={stats}></MyStats>}
              </div>

              <div class="m-5 col-6">
                <h2>Get Image Author Data</h2>
                <button onClick={getUserData}>Get Author Data</button>
                {clickedUserData && (
                  <MyUserData userData={userData}></MyUserData>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
