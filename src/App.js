import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
const Wrapper = styled.div`
  display: flax;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

// animation
const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    // transform: rotate(360deg);
    border-radius: 100px;
  }

  100% {
    // transform: rotate(0deg);
    transform: rotate(360deg);
    border-radius: 0px;
`;

const Emoji = styled.span`
  font-size: 36px;
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  // Box안에 span태그를 설정할 수 있다.
  // 꼭 모든 Component 안에 Style Component 를 설정할 필요는 없다.
  // 타겟을 설정하여 지정할 수 있다.
  // hover를 같이 설정할 수 있다.
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

// input창 같은경우 여러개일 때 하나하나 속성값을 부여하는 방법보단 attrs를
// 사용하여 적용하면 가독성도 올라가고 코드줄이 짧아지고 편하다.
// const Input = styled.input.attrs({required: true })`
//   background-color:tomato;
// `;

// const Btn = styled.button`
//   color: white;
//   background-color: red;
//   border: 0;
//   border-radius: 15px
// `;

// props 로 전송하는 방법 배경색을 각각 따로 설정하고 싶을 때 사용했다.
// const Box = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height:100px;
// `;

// const Text = styled.span`
//   color:#fff
// `;

// const Circle = styled(Box)`
//   border-radius: 50px;
// `;

function App() {
  return (
    <Wrapper>
      <Title>hello</Title>
    </Wrapper>
  );
}

export default App;
