class MainContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <main>
            <section>
                <h2 tabindex="0" class="shadow">Restaurant Collections</h2>
                <div id="content">
                </div>
            </section>
        </main>
      `;
  }
}
customElements.define('main-content', MainContent);
