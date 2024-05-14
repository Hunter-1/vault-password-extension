import callApi from "./callMockAPI";

async function callFavorites(pageNumber: number) {
  return callApi("http://localhost:3000/favorites" + pageNumber);
}

export default callFavorites;
