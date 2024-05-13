async function callApi(url: string) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      console.log(response);
      var data;
      if (response.status == 200) {
        data = await response.json();
      }
      console.log(data);
      return [response.status, data];
    } else {
      return [-1, null];
    }
  } catch {
    return [-1, null];
  }
}

export default callApi;
