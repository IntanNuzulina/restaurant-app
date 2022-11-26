class HeaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
        <div class="hero">
          <div class="hero-inner">
            <h1 class="hero-title">Find Your Version Of The Best Restaurant</h1>
            <p class="hero-tag">~Let's Be Happy, Find Your Choice and feel the Pleasure~</p>
          </div>

          <div id="search-bar">
            <span>🔍</span>
            <input aria-label="input pencarian" type="search" placeholder="Search...">
          </div>
        </div>
    </header>
    `;
  }
}
customElements.define('header-bar', HeaderBar);
