import { useState } from 'react';
import styled from 'styled-components';
import background from '../assets/contact-form-shapes-mobile.svg';
// import Button from './button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input,
  textarea {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #7f8cff;
  }

  input {
    width: 100%;
  }

  textarea {
    width: 100%;
    min-height: 100px;
  }

  button {
    padding: 12px 14px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
    color: #6070ff;
    border: none;
    background-color: white;
    width: fit-content;
    white-space: nowrap;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mgebowlk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Form submitted successfully!');
        // Optionally, reset the form fields after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        {/* <label htmlFor="name">Name:</label> */}
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        {/* <label htmlFor="email">Email:</label> */}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        {/* <label htmlFor="message">Message:</label> */}
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here"
          value={formData.message}
          onChange={handleChange}
          required></textarea>
      </div>
      <button type="submit">Get in touch</button>
    </StyledForm>
  );
};

const StyledDiv = styled.div`
  background-color: #6070ff;
  padding: 100px 10vw;
  border-radius: 20% 0 0 0 / 10% 0 0 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: right center;
  height: 779px;

  .containerOne {
    h1,
    p {
      text-align: center;
    }
  }
`;

const ContactMe = () => {
  return (
    <StyledDiv>
      <div className="containerOne">
        <h1>Contact Me</h1>
        <p>
          If you have an application you are interested in developing, a feature
          that you need built or a project that needs coding. I’d love to help
          with it!
        </p>
      </div>

      <ContactForm />
    </StyledDiv>
  );
};

export default ContactMe;