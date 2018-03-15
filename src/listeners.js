import { getPhotos } from "./flickr.js";
import Lightbox from "./lightbox.js";

const lightbox = new Lightbox({
  selector: ".lightbox--container",
  toggleClass: "lightbox--container__active",
});

const loadPhotos = (data= []) => {
  lightbox.images = data;
  loadThumbnails(data);
}

const loadThumbnails = (data = []) => {
  document.querySelectorAll(".thumbnail").forEach((el) => {
    const index = el.getAttribute("data-thumbnail") - 1;

    el.querySelector("img").setAttribute(
      "src",
      // "https:\/\/farm5.staticflickr.com\/4772\/38982783700_0e66a78cd1_s.jpg"
      data[index]['url_sq']
    );


    el.addEventListener("click", () => {
      lightbox.currentIndex = index;
      lightbox.updateImage();
      lightbox.toggle();
    });
  });
};

// Still need to define all listeners for lightbox on clicks and keypresses

document.addEventListener("DOMContentLoaded", async function() {
  const photoData = await getPhotos();
  loadPhotos(photoData);
  // loadThumbnails();
});
