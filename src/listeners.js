import { getPhotos } from "./flickr.js";

const attachThumbnails = data => {
  document.querySelectorAll(".thumbnail").forEach((el) => {
    el.querySelector("img").setAttribute("src", "https:\/\/farm5.staticflickr.com\/4772\/38982783700_0e66a78cd1_s.jpg");
  });
};

document.addEventListener("DOMContentLoaded", async function() {
  //const photoData = await getPhotos();
  attachThumbnails();
});
