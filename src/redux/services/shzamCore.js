import React from "react";

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3374d683efmshd23eaa3039f28d4p134c74jsn41106535e1e7',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));