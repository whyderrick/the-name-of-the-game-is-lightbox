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

const flickrCall = () => {
  const pageToCall = Math.floor(Math.random() * 10);
  let params = Object.assign({}, defaultParams, { page: pageToCall });

  params = prepareParams(params);

  return params;
}

export { flickrCall };
