class Lightbox {
  constructor({ selector, toggleClass }) {
    this.currentIndex = null;
    this.images = [];
    this.selector = selector;
    this.toggleClass = toggleClass;
  }

  toggle() {
    document
      .querySelector(this.selector)
      .classList.toggle(this.toggleClass);
  }

  next() {
    this.currentIndex += 1;
    this.updateImage();
  }

  previous() {
    this.currentIndex -= 1;
    this.updateImage();
  }

  currentImage() {
    const imageData = this.images[this.currentIndex - 1];
    return {
      src: imageData.url_l,
      height: imageData.height_l,
      width: imageData.width_l,
    };
  }

  updateImage({ src, height, width } = currentImage()) {
    const image = document.querySelector(`${this.selector} img`)

    image.setAttribute("src", src);
    image.setAttribute("height", height);
    image.setAttribute("width", width);
  }
};

export default Lightbox;
