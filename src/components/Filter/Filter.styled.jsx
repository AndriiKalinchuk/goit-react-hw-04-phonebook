import styled from 'styled-components';

export const LabelDescr = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 100%;
  width: 300px;

  color: #fff;
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
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
