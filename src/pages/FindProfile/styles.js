import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  animation: show 600ms;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 100%;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #10d1ee;
  }
`;

export const FindProfileForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;

  img {
    width: 70%;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      padding: 16px 32px;
      border-radius: 8px;
      border: 1px solid transparent;
      background: #eee;
      transition: border ease 400ms;

      :focus {
        border: 1px solid #000;
      }
    }

    button {
      padding: 5px;
    }
  }
`;

export const MainContent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 0;
  box-shadow: inset 0 0 0 400px rgba(0, 0, 0, 0.8);
  flex: 3;
`;
