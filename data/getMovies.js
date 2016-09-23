const moment = require('moment');

module.exports = () => {


  let endDate = new Date();
  let startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 2);

  startDate = moment(startDate).format('YYYY-MM-DD');
  endDate = moment(endDate).format('YYYY-MM-DD')

  const QUERY = `https://data.tmsapi.com/v1.1/movies/showings?startDate=${endDate}&zip=37221&api_key=phj5m6jhbdjqz4v9z7a9zehc`;

  console.log("QUERY", QUERY);

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
    console.log(movies);
    return movies;
  })
  .catch(err => console.log(err));

};