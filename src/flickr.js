// Replace the API key before you deploy
const defaultParams = {
  method: "flickr.interestingness.getList",
  format: "json",
  api_key: "foo_key",
  extras: "url_sq,url_l",
  per_page: "20",
  page: 1,
  nojsoncallback: 1,
};

const prepareParams = params => {
  return Object.entries(params).reduce((result, pair) => {
    let queryParam = pair.join("=");
    return result.concat("&",queryParam);
  }, "");
};

const getPhotos = async () => {
  const pageToCall = Math.floor(Math.random() * 10);
  let params = Object.assign({}, defaultParams, { page: pageToCall });

  params = prepareParams(params);

  const requestUrl = `https://api.flickr.com/services/rest?${params}`

  const response = await fetch(requestUrl);
  const json = await response.json();
  return json.photos.photo;
}

export { getPhotos };
