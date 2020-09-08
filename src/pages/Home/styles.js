import styled from "styled-components";

export const Container = styled.div`
  background: url(${(props) => props.background});
  box-shadow: inset 0 0 0 400px rgba(0, 0, 0, 0.8);
  background-position: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.main`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;

  color: #fff;

  h1 {
    font-size: 1.5rem;
    text-align: center;
  }

  img {
    width: 50%;
    animation: moving 2s infinite;
  }

  span {
    font-weight: 700;
    font-size: 3rem;
  }

  @keyframes moving {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    img {
      width: 100%;
    }
  }

  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
`;

export const TextContent = styled.section`
  display: flex;
  flex-direction: column;
`;
