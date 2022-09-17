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