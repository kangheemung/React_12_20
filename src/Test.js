import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './test.css';

function Test() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Update the handleSubmit function to call postData
  const handleSubmit = (event) => {
      event.preventDefault();
      // Call postData here and use the state variables
      postData({ email, password });
  };

  async function postData(formData) {
    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the email and password from the form
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data); // Handle the data from the response
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  return (
    <Form onSubmit={handleSubmit}> {/* Attach the handleSubmit */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          Please log in.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Test;
