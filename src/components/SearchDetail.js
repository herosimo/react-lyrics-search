import React, { useEffect, useState } from "react";
import Axios from "axios";

const SearchDetail = (props) => {
  const [lyricsData, setLyricsData] = useState(null);
  const [lyrics, setLyrics] = useState(null);

  useEffect(() => {}, [lyricsData]);

  useEffect(() => {
    Axios("https://thingproxy.freeboard.io/fetch/https://api.genius.com" + props.path, {
      headers: {
        Authorization: "Bearer -q9pTc0nbEtxhurbKvVXz1gjzQhwrSJc3Dg3gc9WFEvmRBWYtZVWTcqM4qzJaFwV",
      },
    })
      .then((response) => response.data.response.song)
      .then((data) => {
        setLyricsData(data);
        return data;
      })
      .then((data) => {
        Axios(`https://api.lyrics.ovh/v1/${data.primary_artist.name}/${data.title}`)
          .then((response) => {
            const updatedLyrics = response.data.lyrics.replace(/[\r\n]/g, "<br>");
            setLyrics(updatedLyrics);
          })
          .catch((error) => {
            console.log(error);
            setLyrics("Lyrics not found!");
          });
      })
      .catch((error) => console.log(error));
  }, []);

  let content = (
    <div className="row py-2">
      <div className="col d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
  if (lyricsData) {
    content = (
      <div className="card w-100">
        <div className="card-body p-5">
          <div style={{ height: "200px" }}>
            <img
              src={lyricsData.header_image_url}
              className="card-img-top rounded w-100 h-100"
              style={{ objectFit: "cover" }}
              alt={lyricsData.title}
            />
          </div>
          <h5 className="card-title mt-4 mb-1">{lyricsData.title}</h5>
          <p className="card-text">
            <small className="text-muted">By. {lyricsData.primary_artist.name} | </small>
            <small className="text-muted">Album: {lyricsData.album.name} | </small>
            <small className="text-muted">Released on {lyricsData.release_date_for_display}</small>
          </p>
          <hr />
          <p dangerouslySetInnerHTML={{ __html: lyrics }}></p>
          <hr />
          <p dangerouslySetInnerHTML={{ __html: lyricsData.embed_content }}></p>
        </div>
      </div>
    );
  }

  return (
    <div className="row d-flex justify-content-center py-2 py-2">
      <div className="col-8 d-flex justify-content-center">{content}</div>
    </div>
  );
};

export default SearchDetail;
