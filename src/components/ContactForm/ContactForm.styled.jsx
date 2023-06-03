import styled from 'styled-components';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding: 12px;

  max-width: 100%;
  width: 500px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 100%;
  width: 500px;

  color: #0e0e39;
  font-size: 20px;
`;

export const Button = styled.button`
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;

  border: 2px solid blue;
  border-radius: 5px;

  :hover,
  :focus {
    background-color: blue;
    color: white;
  }
`;

export const Input = styled.input`
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;

  border: 2px solid blue;
  border-radius: 5px;
  color: black;
  font-size: 14px;
`;
