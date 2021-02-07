import React, {useState} from 'react';
import styled from 'styled-components';

const App = () => {

    const [count, setCount] = useState(5);

    const countUp = () => {
        setCount(v => v + 1)
    }

    const countDown = () => {
        setCount(v => v - 1)
    }

    return (
        <Container>
            <h1>Count</h1>
            <h1>{count}</h1>
            <ButtonGroup>
                <Button onClick={countUp}>UP</Button>
                <Button onClick={countDown}>Down</Button>
            </ButtonGroup>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled.div`
  width: 140px;
  height: 40px;
  border: 1px solid #777;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;

  & + & {
    margin-left: 20px;
  }

  &:hover {
    background: #f5f5f5;
  }
  
  &:active{
    background: #eee;
  }
`;

export default App;