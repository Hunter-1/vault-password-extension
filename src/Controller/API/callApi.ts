async function callApi(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  const jsonstring = JSON.stringify(data);
  return jsonstring;
}

export default callApi;
