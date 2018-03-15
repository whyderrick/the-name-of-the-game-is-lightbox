class Lightbox {
  constructor({ selector, toggleClass }) {
    this.currentIndex = null;
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

  updateImage({ src, height, width } = {}) {
  }
};

export default Lightbox;
