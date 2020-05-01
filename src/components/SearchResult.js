import React, { useEffect } from "react";

const SsearchResult = (props) => {
  const updatedResults = props.results.map((result) => {
    return (
      <div className="col mb-4" key={result.result.id}>
        <div className="card ">
          <div style={{ height: "200px" }}>
            <img
              src={result.result.header_image_thumbnail_url}
              className="card-img-top w-100 h-100"
              style={{ objectFit: "cover" }}
              alt={result.result.title}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title mb-1">{result.result.title}</h5>
            <p className="card-text">
              <small className="text-muted">By. {result.result.primary_artist.name}</small>
            </p>
            <a
              href="#"
              className="stretched-link"
              onClick={(event) => {
                event.preventDefault();
                props.onDetail(result.result.api_path);
              }}
            >
              View lyric
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="row d-flex justify-content-center py-2">
      <div className="col-6 d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-md-1 w-100">{updatedResults}</div>
      </div>
    </div>
  );
};

export default SsearchResult;
