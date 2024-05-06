import callApi from "./callApi";

async function callFavorites() {
  return callApi(
    "https://vault.wundermanthompson.ch/api/favorites?Page=0&ClientID="
  );
}

export default callFavorites;
