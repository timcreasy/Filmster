module.exports = () => {

  // GETS USER
  const QUERY = 'https://api.themoviedb.org/3/discover/movie?api_key=795a536c778127747db47817325f3197&language=en-US';

    const requestObj = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    };

    return fetch(QUERY, requestObj)
    .then((response) => {
      return response.json();
    })
    .then((movies) => {
      return movies;
    })
    .catch(err => console.log(err));

};