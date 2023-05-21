import React, { useState } from 'react';

const BookTicket = ({ match }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the form data to local/session storage or send it to an API
    console.log(formData);
  };

  return (
    <div>
      <h2>Book Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Movie Name:</label>
          <input type="text" value={match.params.id} disabled />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookTicket;

