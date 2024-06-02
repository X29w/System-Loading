import type { FC } from "react";
import styled, { keyframes } from "styled-components";

interface AppTextProps {}
const fadeIn = keyframes`
  0% {
    transform: scale(0);
    background-color: black;
    color: white;
    font-size: 10px;
  }
  50% {
    transform: scale(1);
    background-color: white;
    color: black;
    font-size: 50px;
  }
  100% {
    transform: scale(1);
    background-color: white;
    color: black;
    font-size: 50px;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  animation: ${fadeIn} 2s forwards, ${fadeOut} 1s 2s forwards;
`;

const Text = styled.div`
  font-size: 50px;
  color: white;
`;
const AppText: FC<AppTextProps> = () => {
  return (
    <Container>
      <Text>Your Text Here</Text>
    </Container>
  );
};

export default AppText;
