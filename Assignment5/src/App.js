import { useState } from "react";

export default function Gallery() {
  const [pictureData, setPictureData] = useState({ title: null, url: null, explanation: null, username: null, userLink: null });
  const [query, setQuery] = useState("food");

  const endpoint = 'https://api.unsplash.com/photos/random?client_id=IZmoCbCGKKTr4fDIWDH1SObu3dr3PJaG4h6aeJfO75I&query=';

  function randomPhoto(){
    fetch('https://api.unsplash.com/photos/random?client_id=7B3CH3BWU0rb1zCMN4-CEVShZygiksQztkwJPa0R7mo')
        .then(response => response.json())
        .then(json => {
          setPictureData({
            title: json.alt_description,
            url: json.urls.regular,
            explanation: json.description,
            username: "Picture by: " + json.user.name,
            userLink: json.user.links.html
        });
        })
  }

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function handleGetPictureClick() {
    fetch(endpoint+query)
        .then(response => response.json())
        .then(json => {
            setPictureData({
                title: json.alt_description,
                url: json.urls.regular,
                explanation: json.description,
                username: "Picture by: " + json.user.name,
                userLink: json.user.links.html
            });
        })
        .catch(error => console.error(error));
  }

  return (
    <>
      <h2>Get Random Photo</h2>
      <button onClick={randomPhoto}> Generate</button>

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
      <a href={pictureData.userLink} >{pictureData.username}</a>
    </>
  );
}