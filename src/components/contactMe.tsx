import { useState } from 'react';
import styled from 'styled-components';
import background from '../assets/contactBg.svg';

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
    height: 48px;
  }

  textarea {
    width: 100%;
    min-height: 100px;
    height: 170px;
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

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
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
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here"
          value={formData.message}
          onChange={(e) => handleChange(e)}
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
  background-repeat: no-repeat;
  background-position: right center;
  background-image: url(${background});

  .containerOne {
    h1,
    p {
      text-align: center;
    }
  }
`;

const ContactMe = () => {
  return (
    <StyledDiv id="contact">
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
