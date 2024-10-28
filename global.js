import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  width: 100%; // Full width on small screens

  @media (min-width: 768px) {
    width: auto; // Auto width on larger screens
  }

  &:hover {
    background-color: #0056b3;
  }
`;
