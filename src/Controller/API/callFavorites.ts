import callApi from "./callApi";

async function callFavorites(pageNumber: number) {
  return callApi(
    "https://vault.wundermanthompson.ch/api/favorites?Page=" +
      pageNumber +
      "&ClientID="
  );
}

export default callFavorites;
