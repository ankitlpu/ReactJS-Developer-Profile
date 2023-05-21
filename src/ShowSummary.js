import { useEffect, useState, useHistory } from 'react';
import axios from 'axios';

const ShowSummary = ({ match }) => {
  const [summary, setSummary] = useState('');
  const history = useHistory();
  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${match.params.id}`);
        setSummary(response.data.summary);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSummary();
  }, [match.params.id]);

  return (
    <div>
      <h2>Show Summary</h2>
      <p>{summary}</p>
      <button onClick={() => history.push(`/book/${match.params.id}`)}>Book Ticket</button>
    </div>
  );
};

export default ShowSummary;
