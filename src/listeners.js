import { getPhotos } from "./flickr.js";
import Lightbox from "./lightbox.js";

const lightbox = new Lightbox({
  selector: ".lightbox--container",
  toggleClass: "lightbox--container__active",
});

const loadThumbnails = (data = []) => {
  document.querySelectorAll(".thumbnail").forEach((el) => {
    const index = el.getAttribute("data-thumbnail");
    // temp variable until we're loading
    const src = data[index] || "https:\/\/farm5.staticflickr.com\/4772\/38982783700_0e66a78cd1_s.jpg"

    el.querySelector("img").setAttribute(
      "src",
      src
    );

    el.addEventListener("click", () => {
      lightbox.toggle();
      lightbox.currentIndex = index;
    });
  });
};

// Still need to define all listeners for lightbox on clicks and keypresses

document.addEventListener("DOMContentLoaded", async function() {
  //const photoData = await getPhotos();
  loadThumbnails();
});
