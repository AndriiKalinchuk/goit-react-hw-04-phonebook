import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  color: #0c0c32;
  font-size: 14px;
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
