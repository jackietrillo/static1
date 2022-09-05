const getUrl = function () {
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
    return "http://localhost:7013/api/function?name=";
  else return "https://static1func-test.azurewebsites.net/api/function?name=";
};

const getData = function () {
  fetch("http://api.icndb.com/jokes/random", {
    method: "GET",
    accept: "application/json"
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.value.joke);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getJoke = async function () {
  let response = await fetch("http://api.icndb.com/jokes/random", {
    method: "GET",
    accept: "application/json"
  });
  let data = await response.json();
  console.log(data.value.joke);
  return data.value.joke;
};

const getQuote = async function () {
  let response = await fetch("https://zenquotes.io/api/quotes", {
    method: "GET",
    accept: "application/json"
  });
  let quotes = await response.json();
  console.log(quotes[0].q);
  return quotes[0].q;
};

const getMessage = async function () {
  let url = getUrl();
  url += $("#name-input").val();
  let response = await fetch(url, {
    method: "GET",
    accept: "application/json"
  });
  let data = await response.json();
  console.log(data.message);
  return data.message;
};
