
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import ShowList from './ShowList';
import ShowSummary from './ShowSummary';
import BookTicket from './BookTicket';

const App = () => {
  return (
    <Router>
      <div>
      <Routes>
  <Route path="/" element={<ShowList />} />
  <Route path="/show/:id" element={<ShowSummary />} />
  <Route path="/book/:id" element={<BookTicket />} />
</Routes>
      </div>
    </Router>
  );
};

export default App;
