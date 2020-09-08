import React from "react";
import { Link } from "react-router-dom";

import akali from "../../assets/images/akali.png";

import wallpaperAram from "../../assets/images/arambg.jpg";

import Button from "../../components/Button";

import { Container, Content, TextContent } from "./styles";

function Home() {
  return (
    <Container background={wallpaperAram}>
      <Content>
        <img src={akali} alt="summoners rift " background={wallpaperAram} />
        <TextContent>
          <h1>
            Consulte seu perfil em <br /> <span>League of Legends</span>
          </h1>
          <Link to="find-profile">
            <Button>Veja seu perfil</Button>
          </Link>
        </TextContent>
      </Content>
    </Container>
  );
}

export default Home;
