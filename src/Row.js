import React, { useState, useEffect } from "react";
import axios from './axios';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

//   When the Row loads need to pull the info from the tmdb
// basically when a row loads this snippet of code runs
// since the [] is empty (they call it a dependency), it will invoke only ones
// otherwise it will invoke each time the proerty value changes
  useEffect(() => {

    async function fetchData(){
        const request = await axios.get(fetchUrl);
        console.log(request);
        return request;
    }
    fetchData();
  }, [])
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
