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

Having worked in the movie industry and also being a movie geek, it seemed appropriate to make a app based on this interest. My Movie List is taking the to-do app idea and putting my own twist on it. Instead of a to-do list it's a to-watch list. The user can create an account, search for movies they're intested in watching or have seen, add them to their list and give the movie a rating out of 10. The user can also filter their movies by title, genre, seen and not seen. Design is inspired by Netflix.

## Technical details

This project was build with React, Material UI and Firebase for authentication.

Images and data are fetched from <a href="https://developers.themoviedb.org/3"> The Movie Database API </a>.

Redux was used for the handling of authentication and state managent of the movies. This included updating ratings, if the movie had been watched, removing and adding movies, if the movie is selected and clearing state. Redux seemed the best option as their quite a few containers sharing different states. You can find the reducer <a href= "https://github.com/cam71101/My-Movie-List/blob/657db207bf811fc880a3bb76e78fe08c77f75420/src/store/reducers/movies.js#L11-L108"> here </a>.

I also created a function that would cache all images upon logging into the app, as I was having issues with images loading correctly when initally logging in. This function can be found <a href="https://github.com/cam71101/My-Movie-List/blob/657db207bf811fc880a3bb76e78fe08c77f75420/src/containers/Home/Home.js#L85-L100"> here </a>.

For the search bar, I used an autocomplete component. I felt this made the App smoother, rather than having to load different pages for the movie being searched for. I created it using the help of Material UI. You can find the script <a href="https://github.com/cam71101/My-Movie-List/blob/657db207bf811fc880a3bb76e78fe08c77f75420/src/containers/Home/SearchMoviesField/SearchMoviesField.js#L62-L162"> here </a>.

## Responsive Design

<p align="center">
<img src="https://res.cloudinary.com/dndp8567v/image/upload/v1608643280/MyMoveListResponsive_e556aab736.gif" />
</p>

## Main Features

- Auto complete search
- Authentication
- Add favourite movies to a list
- Rate the movies
- Mark if watched or not
- Filter movies by name, genre, watched or not watched

## Project setup

```
npm install
npm start
```

## Tests

```
npm test
```
