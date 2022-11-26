class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <nav>
                <button id="menu">
                  ☰
                </button>
                <div class="nav-title">
                  <a href="#" class="logo">ManGans <span class="apps">Apps</span></a>
                </div>
                
                <div class="drawer">
                    <div class="hero-drawer"></div>
                    <ul class="nav-list">
                        <li class="nav-items"><a href="#/list-restaurant">Home</a></li>
                        <li class="nav-items"><a href="#/favorite">Favorite</a></li>
                        <li class="nav-items"><a href="https://www.linkedin.com/in/intan-nuzulina-ba99aa248/" target="_blank">About Us</a></li>
                    </ul>
                </div>
            </nav>
        `;
  }
}
customElements.define('app-bar', AppBar);
