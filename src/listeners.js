import { getPhotos } from "./flickr.js";

const loadThumbnails = (data = []) => {
  document.querySelectorAll(".thumbnail").forEach((el) => {
    const index = el.getAttribute("data-thumbnail");
    el.querySelector("img").setAttribute(
      "src",
      data[index] || "https:\/\/farm5.staticflickr.com\/4772\/38982783700_0e66a78cd1_s.jpg"
    );
    el.addEventListener("click", () => {

      el.classList.add("lightbox--image__active");
    });
  });
};

document.addEventListener("DOMContentLoaded", async function() {
  //const photoData = await getPhotos();
  loadThumbnails();
});
