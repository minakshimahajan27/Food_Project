import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './From.css';
import axios from 'axios';

export default function From() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Sending to backend:', formData);

    try {
      await axios.post('http://localhost:3000/api/reservation', formData);
      alert('Reservation submitted successfully');
      navigate('/thank-you'); // ✅ change this to your frontend route
    } catch (err) {
      console.error('Error:', err);
      alert('Error submitting reservation: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div>
          <img src='reservation.png' alt='Reservation' />
        </div>
        <div className="container1">
          <p className='header'>MAKE A RESERVATION</p>
          <p>For Further Questions, Please Call</p>
          <div className='text'>
            <input type='text' name='firstName' onChange={handleChange} placeholder='First Name' />
            <input type='text' name='lastName' onChange={handleChange} placeholder='Last Name' />
          </div>
          <div className='date_time'>
            <input type='date' name='date' onChange={handleChange} />
            <input type='time' name='time' onChange={handleChange} />
          </div>
          <input type='email' name='email' onChange={handleChange} placeholder='Email' />
          <input type='text' name='phone' onChange={handleChange} placeholder='Phone' />
          <button type='submit'>RESERVE NOW →</button>
        </div>
      </div>
    </form>
  );
}
