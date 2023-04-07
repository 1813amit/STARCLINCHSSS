const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'billboard3.p.rapidapi.com',
    'X-RapidAPI-Key': 'f8e7b0c3a3mshc9d60df23ffb2d6p111a5ejsnb1c25ea40cbb'
  }
};

fetch('https://billboard3.p.rapidapi.com/hot-100?date=2022-07-07', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));