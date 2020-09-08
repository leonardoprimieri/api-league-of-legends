import React from "react";

import {
  Container,
  CardInfo,
  ItemGroup,
  ChampImage,
  Image,
  CardHeader,
} from "./styles";

function ProfileCard({
  name,
  level,
  main,
  mastery,
  champImage,
  masteryIcon,
  tierImage,
}) {
  return (
    <Container>
      <CardInfo>
        <h1>{name}</h1>
        <ItemGroup>
          <h2>Nível: </h2>
          <h2>{level}</h2>
        </ItemGroup>
        <ItemGroup>
          <h2>Main: </h2>
          <h2>{main}</h2>
        </ItemGroup>
        <ItemGroup>
          <h2>Total de pontos: </h2>
          <h2>{mastery.toLocaleString()}</h2>
        </ItemGroup>
        <ItemGroup>
          {tierImage !== "Unranked" ? (
            <img
              src={`http://localhost:3000/ranked-emblems/${tierImage}.png`}
              alt=""
            />
          ) : (
            <img
              src={`http://localhost:3000/ranked-emblems/UNRANKED.png`}
              alt=""
            />
          )}
        </ItemGroup>
      </CardInfo>
      <ChampImage background={champImage}>
        <Image>
          <img
            src={`https://raw.githubusercontent.com/RiotAPI/Riot-Games-API-Developer-Assets/master/champion-mastery-icons/mastery-${masteryIcon}.png`}
            alt="mastery champ"
          />
        </Image>
      </ChampImage>
    </Container>
  );
}

export default ProfileCard;
