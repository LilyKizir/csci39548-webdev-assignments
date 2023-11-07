import { useState } from "react";

export default function Gallery() {
  const [pictureData, setPictureData] = useState({ title: null, url: null, explanation: null });
  const [query, setQuery] = useState("food");

  const endpoint = 'https://api.unsplash.com/photos/random?client_id=IZmoCbCGKKTr4fDIWDH1SObu3dr3PJaG4h6aeJfO75I&query=';

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
                explanation: json.description
            });
        })
        .catch(error => console.error(error));
  }

  return (
    <>
      <h2>Random Photo</h2>
      <label>
        Generate Picture with Query:
        <input onChange={handleQueryChange} value={query} />
      </label>
      <button onClick={handleGetPictureClick}>Get Picture</button>

      <img src={pictureData.url} alt="random-pic" />
      <h2>{pictureData.title}</h2>
      <p>{pictureData.explanation}</p>
    </>
  );
}