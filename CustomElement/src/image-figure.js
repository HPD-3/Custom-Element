class ImageFigure extends HTMLElement {
    constructor() {
      super();
   
      this.render();
    }
   
    render() {
      this.innerHTML = `
        <figure>
          <img src="src/Building.jpg" alt="Building" width="200">
          <figcaption><strong>This is A cool Building</strong></figcaption>
        </figure>
      `;
    }
  }
   
  customElements.define('image-figure', ImageFigure);