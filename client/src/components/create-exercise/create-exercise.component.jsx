import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

const CreateExercise = () => {
  const [ exercise, setExercise ] = useState({
    username: '',
    description: '',
    duration: 0,
    date: new Date(),
    users: []
  });
  
  const handleChange = event => {
    const { name, value } = event.target;
    setExercise({ ...exercise, [name]: value });
  }

  const handleDateChange = date => setExercise({ ...exercise, date: date })

  const handleSubmit = event => {
    event.preventDefault();
    
    console.log(exercise);

    window.location = '/';
  }

  const {username, description, duration, date, users} = exercise;

  return(
    <div className='mt-5'>
      <h2>Create New Exercise</h2>
      <Form className='text-left' onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label className="">Username</Form.Label>
          <Form.Control as="select" name='username' placeholder="select username" value={username} onChange={handleChange}>
            {
              users.map(user => (
                <option key={user} value={user}>{user}</option>
              ))
            }
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label className="">Description</Form.Label>
          <Form.Control name='description' type="text" placeholder="enter description" value={description} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="duration">
          <Form.Label className="">Duration</Form.Label>
          <Form.Control name='duration' type="number" min="0" placeholder="enter duration" value={duration} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label className="">Date</Form.Label>
          <div>
          <Calendar name='date' onChange={handleDateChange} value={date} />
          </div>
        </Form.Group>

        <Button variant="primary" type="submit" className='mt-3'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateExercise;