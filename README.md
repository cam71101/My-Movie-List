<p align="center">
  <img src="https://res.cloudinary.com/dndp8567v/image/upload/v1608638697/logo_cropped_3186109ffe.png">
</p>

<p align="center">
<img src="https://img.shields.io/badge/madeby-cam71101-green" />
<img src="https://img.shields.io/github/languages/top/cam71101/My-Movie-List" />
<img src="https://img.shields.io/github/last-commit/cam71101/My-Movie-List" />
<a href="https://twitter.com/d_fisherWebDev" alt="twitter">
<img src="https://img.shields.io/twitter/follow/d_fisherWebDev?style=social" />
</a>
<img src="https://img.shields.io/badge/react-17.0.1-green" />
</p>

<h2 align="center"><a  href="https://cam71101.github.io/My-Movie-List">Live Demo</a></h2>

## Description

<p align="center">
<img src="https://res.cloudinary.com/dndp8567v/image/upload/v1608640031/MyMoveListDesktop_f2fa3c32de.gif" />
</p>

Having worked in the movie industry and also being a movie geek, it seemed appropriate to make a app based on this interest. My Movie List is taking the to-do app idea and putting my own twist on it. Instead of a to-do list it's a to-watch list. The user can create an account, search for movies they're intested in watching or have seen, add them to their list and give the movie a rating out of 10. The user can also filter their movies by title, genre, seen and not seen. This app uses <a href="https://developers.themoviedb.org/3"> The Movie Database API </a>

## Technical details

This project was build with React and Material UI.

Rather than use Redux for handling API requests I used a custom hook for http requests. This hook also made use of a reducer and the hook was used throughout most of my containers. I decided to go with a hook rather than Redux because I wanted to use a different technique. The hook can be found <a href="https://github.com/cam71101/PodcastApp/blob/f6d09907bc2a1a214175486806292889b728a746/src/hooks/http.js#L1-L165">here</a>.

To control the audio track I used context. This was so I wouldn't have to pass down props all the way to the audio player container. The context file is <a href="https://github.com/cam71101/PodcastApp/blob/f6d09907bc2a1a214175486806292889b728a746/src/context/audio-context.js#L1-L40"> here </a>.

Along with using the APIs I also had to fetch the RSS feeds for the podcast pages to gather more information about each episode. However, the RSS feed is only called when the user clicks on the episode to find more information. Again, using useReducer rather than having mutiple useState hooks. You can find the code <a href="https://github.com/cam71101/PodcastApp/blob/616db3f7df881b692d26d380dcbabd7123072a9b/src/containers/PodcastPage/PodcastPage.js#L119-L147"> here</a>.

I focused heavily on unit testing when making this application, using a mixture of Jest/Enzyme and the React Testing Library. I prefer using the React Testing Library as I find it easier to use and very lightweight.

## Responsive Design

<p align="center">
<img src="https://res.cloudinary.com/dndp8567v/image/upload/v1608584482/PodcastAppResponsiveLowRes_9084851fc7.gif" />
</p>

## Main Features

- Audio player (courtesy of https://www.npmjs.com/package/react-h5-audio-player)
- Podcast charts
- Search
- Categories

## Project setup

```
npm install
npm start
```

## Tests

```
npm test
```
