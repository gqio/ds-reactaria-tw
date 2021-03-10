customElements.define(
  "my-button",
  class extends HTMLElement {
    connectedCallback() {
      console.log(this.variant, this.getAttribute("variant"));
      this.innerHTML = `<button style="color:red">${this.textContent}</button>`;
    }
  }
);
