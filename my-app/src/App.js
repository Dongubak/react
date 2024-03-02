
import './App.css';
import react, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import useInput from './useInput';
import useCounter from './useCounter';
import styled, { css } from 'styled-components';

const Box = styled.div`
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;

  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 788px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;;
  justify-content: center;;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover { /// &문자를 사용하여 자기 자신 선택
    background: rgba(255, 255, 255, 0.9);
  }

  ${
    props => props.inverted && css`
      background: none;
      border: 2px solid white;
      color: white;

      &:hover {
        background: white;
        color: black;
      }
    `
  };

  & + button {
    margin-left: 1rem;
  }
`;

const CustomComponent = ({className}) => {
  return(
    <h2 className={className}>hello</h2>
  );
};

const StyledCustomComponent = styled(CustomComponent)`
  font-size: 2rem;
`

function App() {
  

  return(
    <Box color='black'>
      <Button>Hi</Button>
      <Button inverted={true}>outline</Button>
    </Box>
  )
}

export default App;
