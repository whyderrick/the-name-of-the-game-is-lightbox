class Lightbox {
  constructor({ selector, toggleClass, maxIndex = 15 }) {
    this.isOpen = false;
    this.currentIndex = null;
    this.maxIndex = maxIndex;
    this.images = [];
    this.selector = selector;
    this.toggleClass = toggleClass;
  }

  toggle() {
    this.isOpen = !this.isOpen;
    document
      .querySelector(this.selector)
      .classList.toggle(this.toggleClass);
  }

  next() {
    if (this.currentIndex === this.maxIndex) {
      this.updateImage(0);
    } else {
      this.updateImage(this.currentIndex + 1);
    }
  }

  previous() {
    if (this.currentIndex === 0) {
      this.updateImage(this.maxIndex);
    } else {
      this.updateImage(this.currentIndex - 1);
    }
  }

  currentImage() {
    const imageData = this.images[this.currentIndex];
    return {
      src: imageData.url_l,
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

    titleNode.innerText = imageData.title;
  }

  // Listeners
  attachListeners() {
    this.keyupListeners();
    this.clickListeners();
  }

  keyupListeners() {
    document.addEventListener("keyup", (e) => {
      if(this.isOpen) {
        switch(e.key) {
        case "Escape":
          this.toggle();
          break;
        case "ArrowLeft":
          this.previous();
          break;
        case "ArrowRight":
          this.next();
          break;
        }
      }
    });
  }

  clickListeners() {
    document.querySelector(`${this.selector} .lightbox--button__close`)
      .addEventListener("click", () => { this.toggle() });

    document.querySelector(`${this.selector} .lightbox--button__next`)
      .addEventListener("click", () => { this.next() });

    document.querySelector(`${this.selector} .lightbox--button__previous`)
      .addEventListener("click", () => { this.previous() });
  }
}

export default Lightbox;
