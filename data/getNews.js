module.exports = () => {

  // GETS USER
  const QUERY = 'https://api.cognitive.microsoft.com/bing/v5.0/news/?Category=Entertainment';

    const requestObj = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Ocp-Apim-Subscription-Key': 'fbfa24551b5d45cfa05e3ddc9c59ebd6'
      }
    };

    return fetch(QUERY, requestObj)
    .then((response) => {
      return response.json();
    })
    .then((articles) => {
      return articles;
    })
    .catch(err => console.log(err));

};