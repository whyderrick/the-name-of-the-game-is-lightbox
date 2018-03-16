import { getPhotos } from "./flickr.js";
import Lightbox from "./lightbox.js";
import startingPhoto from "./assets/images/cape_photo.jpg"

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
    const thumbnailSrc = data[index]['url_sq']

    el.querySelector("img").setAttribute( "src", thumbnailSrc);

    el.addEventListener("click", () => {
      lightbox.updateImage(index);
      lightbox.toggle();
    });
  });
};

// Still need to define all listeners for lightbox on clicks and keypresses

document.addEventListener("DOMContentLoaded", async () => {
  lightbox.attachListeners();
  const photoData = await getPhotos();
  loadPhotos(photoData);
  // loadThumbnails();
});
