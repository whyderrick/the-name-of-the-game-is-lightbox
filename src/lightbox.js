class Lightbox {
  constructor({ selector, toggleClass, maxIndex = 16 }) {
    this.currentIndex = null;
    this.maxIndex = maxIndex;
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
    if (this.currentIndex === this.maxIndex) {
      this.currentIndex = 0;
    } else {
      this.updateImage(this.currentIndex + 1);
    }
  }

  previous() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.maxIndex;
    } else {
      this.updateImage(this.currentIndex - 1);
    }
  }

  currentImage() {
    const imageData = this.images[this.currentIndex];
    return {
      src: imageData.url_l,
      height: imageData.height_l,
      width: imageData.width_l,
      title: imageData.title,
    };
  }

  updateImage(index) {
    this.currentIndex = index;
    const imageData = this.currentImage();

    const titleNode = document.querySelector(
      `${this.selector} [data-role='image-title']`
    );
    const imageNode = document.querySelector(`${this.selector} img`);

    imageNode.setAttribute("src", imageData.src);
    imageNode.setAttribute("height", imageData.height);
    imageNode.setAttribute("width", imageData.width);

    titleNode.innerText = imageData.title;
  }

  // Listeners
  attachListeners() {
    document.querySelector(`${this.selector} .lightbox--button__close`)
      .addEventListener("click", () => { this.toggle() });

    document.querySelector(`${this.selector} .lightbox--button__next`)
      .addEventListener("click", () => { this.next() });

    document.querySelector(`${this.selector} .lightbox--button__previous`)
      .addEventListener("click", () => { this.previous() });
  }
}

export default Lightbox;
