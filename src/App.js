import React, { useState, useEffect } from "react";

import axios from "axios";

import InputSearch from "./components/InputSearch";
import SearchResult from "./components/SearchResult";
import SearchDetail from "./components/SearchDetail";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [detailTerm, setDetailTerm] = useState(null);

  useEffect(() => {
    axios(
      `https://api.genius.com/search?q=${searchTerm}&access_token=-q9pTc0nbEtxhurbKvVXz1gjzQhwrSJc3Dg3gc9WFEvmRBWYtZVWTcqM4qzJaFwV`
    )
      .then((response) => response.data.response.hits)
      .then((data) => {
        setSearchResults(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [searchTerm]);

  const onSearchHandler = (term) => {
    setIsLoading(true);
    setDetailTerm(null);
    setSearchTerm(term);
  };

  const onDetailHandler = (detail) => {
    setDetailTerm(detail);
  };

  const searchResult = (
    <SearchResult results={searchResults} onDetail={(detail) => onDetailHandler(detail)} />
  );

  const searchDetail = <SearchDetail path={detailTerm} />;

  let content = searchResult;
  if (detailTerm) {
    content = searchDetail;
  }

  let loading = null;
  if (isLoading) {
    loading = (
      <div className="row py-2">
        <div className="col d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <InputSearch onSearch={(term) => onSearchHandler(term)} />
      {loading}
      {content}
    </div>
  );
}

export default App;
