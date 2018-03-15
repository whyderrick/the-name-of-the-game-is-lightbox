class Lightbox {
  constructor({ selector, toggleClass }) {
    this.activeIndex = null;
    this.toggle = () => {
      document
        .querySelector(selector)
        .classList.toggle(toggleClass);
    };
  };
};

export default Lightbox;
