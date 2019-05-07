function PhotoService() {}

PhotoService.prototype.getCuratedPhoto = function() {
  const PEXELS_API_KEY = process.env.VUE_APP_PEXELS_API;
  const resultsPerPage = 50;

  const curatedURL = `https://api.pexels.com/v1/curated?per_page=${resultsPerPage}&page=1`;
  return new Promise((resolve, reject) => {
    fetch(curatedURL, {
      mode: "cors",
      credentials: "same-origin",
      headers: {
        Authorization: PEXELS_API_KEY
      }
    })
      .then(result => result.json())
      .then(curatedImages => {
        const randomNumber = Math.floor(
          Math.random() * (resultsPerPage - 0) + 0
        );
        const image = curatedImages.photos[randomNumber];
        resolve(image);
      })
      .catch(err => reject(err));
  });
};
export default PhotoService;
