# Weather App

## Introduction

> This project is a website that finds the weather the in city searched 

## Technologies used
<p align="left">
 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> 

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="typescript" width="40" height="40"/> 
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="typescript" width="40" height="40"/> 
 </p>

## What I learned with this project?
  - I discovered a new website that contains many easy API to consume named [RapidAPI](https://rapidapi.com/hub)
  - I learned how to wait for too some responses using **Promise**. Is very similar to Fork in Angular
     ```javascript
      Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({city: searchData.label, ...forecastResponse });
    }).catch((err) => console.log(err));
     ```
## Presentation of the application
![gift_alpaca](https://user-images.githubusercontent.com/39220517/212215693-0848281c-4562-44d3-9de3-6c5b8a08724d.gif)
## How to run?

- Clone this repository
- Run this command on the terminal to install all of dependencies
  ```
  npm i
  ``` 
- Then, run this command
    ```javascript
    npm run start
    ```