async function callApi(url: string) {
  const response = await fetch(url);
  console.log(response);
  var data;
  if (response.status == 200) {
    data = await response.json();
  }
  console.log(data);
  return [response.status, data];
}

export default callApi;
