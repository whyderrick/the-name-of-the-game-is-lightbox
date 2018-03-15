import { getPhotos } from "./flickr.js";

document.addEventListener("DOMContentLoaded", async function() {
  const photoData = await getPhotos();
});
