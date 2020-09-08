import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import api from "../../services/api";
import champions123 from "../../data/champions";

import lolLogo from "../../assets/images/lolLogo.png";
import wallpaperSummonersRift from "../../assets/images/wallpaperSummonersRift.jpg";
import ProfileCard from "../../components/ProfileCard";

import { Container, FindProfileForm, MainContent } from "./styles";

function FindProfile() {
  const [summonerName, setSummonerName] = useState("");
  const [summonerLevel, setSummonerLevel] = useState("");
  const [summonerResponseName, setSummonerResponseName] = useState("");
  const [summonerID, setSummonerID] = useState("");
  const [summonerQueue, setSummonerQueue] = useState({});
  const [rankTier, setRankTier] = useState("Unranked");

  const [mainChampionID, setMainChampionID] = useState();

  const [champions, setChampions] = useState({});
  const [championMastery, setChampionMastery] = useState("");
  const [championLevel, setChampionLevel] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();
    const response = await api.getSummonerInfo(summonerName);
    setSummonerLevel(response.summonerLevel);
    setSummonerResponseName(response.name);
    setSummonerID(response.id);
  }

  useEffect(() => {
    async function getMasteryChampions() {
      const response = await api.getAllChampions(summonerID);
      setChampions(response);
    }
    getMasteryChampions();
  }, [summonerID]);

  useEffect(() => {
    async function getSummonerRank() {
      const response = await api.getSummonerRank(summonerID);
      setSummonerQueue(response);
    }
    getSummonerRank();
  }, [summonerID]);

  useEffect(() => {
    if (summonerQueue[0]) {
      setRankTier(summonerQueue[0].tier);
    }
  }, [summonerQueue[0]]);

  useEffect(() => {
    if (champions[0]) {
      setMainChampionID(champions[0].championId);
      setChampionMastery(champions[0].championPoints);
      setChampionLevel(champions[0].championLevel);
    }
  }, [champions[0]]);

  return (
    <Container>
      <FindProfileForm>
        <Link to="/">
          <MdKeyboardArrowLeft size={50} />
          Voltar para a home
        </Link>
        <img src={lolLogo} alt="league of legends" />
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="summoner"
            placeholder="Nome de invocador"
            value={summonerName}
            onChange={(e) => setSummonerName(e.target.value)}
          />
          <button type="submit">
            <MdKeyboardArrowRight size={50} />
          </button>
        </form>
      </FindProfileForm>
      <MainContent background={wallpaperSummonersRift}>
        {summonerResponseName ? (
          <ProfileCard
            name={summonerResponseName}
            level={summonerLevel}
            main={champions123[mainChampionID]}
            mastery={championMastery}
            masteryIcon={championLevel}
            champImage={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champions123[mainChampionID]}_1.jpg`}
            tierImage={rankTier}
          />
        ) : (
          <h1 style={{ color: " #fff" }}>O resultado aparecerá aqui...</h1>
        )}
      </MainContent>
    </Container>
  );
}

export default FindProfile;
