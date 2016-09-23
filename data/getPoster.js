
module.exports = (title) => {

  let formattedTitle = encodeURI(title);

  const QUERY = `https://api.themoviedb.org/3/search/movie?api_key=795a536c778127747db47817325f3197&query=${formattedTitle}`

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
  .then((movie) => {
    return movie;
  })
  .catch(err => console.log(err));

};