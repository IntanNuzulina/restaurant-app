class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    <div class="footer-wrapper mb-2">
      <div tabindex="0" class="description-app">
        <h2>ManGans <span class="apps">Apps</span></h2>
        <p><b>Find Your Choice and feel the Pleasure...</b></p>
      </div>

      <div tabindex="0" class="contact-info">
        <h3>Contact Info</h3>
        <h4>Phone</h4>
        <p>+62 853 7280 7903</p>
        <h4>Email</h4>
        <p>intannuzulina@gmail.com</p>
      </div>

      <div tabindex="0" class="page-navigation">
        <h3>Navigation</h3>
          <span><b><a href="#">Home</a></span>
          <span><a href="#/favorite">Favorite</a></span>
          <span><a href="https://www.linkedin.com/in/intan-nuzulina-ba99aa248/" target="_blank">About Me</a></b></span>
      </div>
      
      <div tabindex="0" class="follow-me">
      <h3>Follow</h3>
        <a aria-label="instagram" href="https://www.instagram.com/intannuzull6/" target="_blank">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a aria-label="linkedin" href="https://www.linkedin.com/in/intan-nuzulina-ba99aa248/" target="_blank">
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a aria-label="github" href="https://github.com/IntanNuzulina" target="_blank">
          <i class="fa fa-github-square" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    
    <div tabindex="0" class="text-center p-2">
      Copyright &copy; 2022 ManGans <span class="apps"> Apps</span>
    </div>
  </footer>
      `;
  }
}
customElements.define('footer-bar', FooterBar);
