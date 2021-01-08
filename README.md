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

<h2 align="center"><a  href="https://d-fisher.com/my-movie-list">CLICK HERE FOR FULL PROJECT BREAKDOWN</a></h2>

Being a film nerd, it seemed appropriate to make an app based on movies. My Movie List is a twist on the to-do list app. Instead of a to-do list, it's a to-watch list. The user can create an account, search for movies they're interested in watching or have seen, add them to a list and give the movie a rating out of 10. The user can also filter their movies by title, genre, and if they've been watched or not. Netflix inspires design.

## Tecnologies Used

- React & Javascript
- Redux
- Firebase
- Material UI
- Docker
- Jest/Enzyme
- React Testing Library
- Git & Github

## Main Features

- Auto complete search
- Authentication
- Add favourite movies to a list
- Rate the movies
- Mark if watched or not
- Filter movies by name, genre, watched or not watched

## Technical details

Redux action function used for handling if the user is authorised or checks the user's password if they're signing up. It also logs their token in the local storage and automatically removes the data after an hour. Full script can be found <a href= "https://github.com/cam71101/My-Movie-List/blob/a5525115ab3b2cf7b3eac7abdb410d4921e39cfe/src/store/actions/auth.js#L42-L72"> here. </a>

```javascript
export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDMF4MLFrGLwT2dxvn_070wiDQe9GiW0Pk`;
    if (!isSignup) {
      url =
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDMF4MLFrGLwT2dxvn_070wiDQe9GiW0Pk';
    }
    axios
      .post(url, authData)
      .then((response) => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((err) => {
        dispatch(authFail(err.response));
      });
  };
};
```

### Redux Action Auth Function

```javascript
const cacheImages = async (srcArray) => {
  const promises = await srcArray.map((src) => {
    return new Promise(function (resolve, reject) {
      const img = new Image();
      img.src = `https://image.tmdb.org/t/p/original${src.backdrop_path}`;
      img.onLoad = resolve();
      img.onError = reject();

      const imgtwo = new Image();
      imgtwo.src = `https://image.tmdb.org/t/p/original${src.poster_path}`;
      imgtwo.onLoad = resolve();
      imgtwo.onError = reject();
    });
  });
  await Promise.all(promises);
};
```

This function was used to cache all images once the user had logged in, which stopped some buggy UI transitions. Full script can be found <a href= "https://github.com/cam71101/My-Movie-List/blob/657db207bf811fc880a3bb76e78fe08c77f75420/src/containers/Home/Home.js#L85-L100"> here. </a

## Responsive Design

<p align="center">
<img src="https://res.cloudinary.com/dndp8567v/image/upload/v1608643280/MyMoveListResponsive_e556aab736.gif" />
</p>

## Future Features

- The ability for users to write reviews against the movies
- Additional info such as the actors in the movie
- Links to the IMDB profile of the actors
- Embedded trailers

## Project setup

```
npm install
npm start
```

## Tests

```
npm test
```
