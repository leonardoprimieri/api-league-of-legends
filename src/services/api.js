const apiKey = "RGAPI-ac287370-8818-4cb5-a714-baceecd2aa08";
const baseURL = "https://br1.api.riotgames.com/lol/";
const apiRequest = async (endpoint) => {
  const request = await fetch(`${baseURL}${endpoint}`);
  const data = await request.json();

  return data;
};

export default {
  getSummonerInfo: async (summonerName) => {
    const response = await apiRequest(
      `summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`
    );
    return response;
  },
  getSummonerRank: async (summonerID) => {
    const response = await apiRequest(
      `league/v4/entries/by-summoner/${summonerID}?api_key=${apiKey}`
    );

    return response;
  },
  getAllChampions: async (summonerID) => {
    const response = await apiRequest(
      `champion-mastery/v4/champion-masteries/by-summoner/${summonerID}?api_key=${apiKey}`
    );

    return response;
  },
};
