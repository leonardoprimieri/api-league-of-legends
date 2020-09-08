import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardInfo = styled.div`
  flex-direction: column;
  color: #fff;
  justify-content: flex-start;

  h1 {
    text-align: center;
  }

  img {
    justify-self: flex-start;
  }
`;

export const ItemGroup = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;

  img {
    width: 30%;
  }
`;

export const ChampImage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: left;
  height: 100%;
  width: 46%;
  justify-content: center;
  align-items: end;
`;

export const Image = styled.div`
  display: flex;
  align-items: flex-start;

  img {
    margin-left: -50px;
  }
`;

export const CardHeader = styled.div`
  text-align: initial;
`;
