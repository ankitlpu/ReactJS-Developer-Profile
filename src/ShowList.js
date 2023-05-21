import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowList = ({ history }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchShows();
  }, []);

  const handleShowClick = (showId) => {
    history.push(`/show/${showId}`);
  };

  return (
    <div>
      <h2>Show List</h2>
      {shows.map((show) => (
        <div key={show.show.id}>
          <h3>{show.show.name}</h3>
          <button onClick={() => handleShowClick(show.show.id)}>View Summary</button>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
