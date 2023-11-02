import { LitElement, html, css } from 'lit';

class TranslationList extends LitElement {
  static styles = css`
    /* Add your CSS styles here */
    :host {
      width: 100%;
    }

    ul {
      list-style : none;
      width: 100%;
      padding: 0px;
    }

    .highlighted {
      background-color: #000; /* Set the background color for highlighted items */
    }
  `;

  static properties = {
    translations: { type: Array },
  };

  constructor() {
    super();
    this.translations = []; // Initialize translations as an empty array
  }

  render() {
    return html`
      <ul>
        ${this.translations.map(
          (entry, index) => html`
            <translation-item 
              .entry=${entry}
              .highlighted=${index % 2 === 1 ? true : false}>
            </translation-item>`
        )}
      </ul>
    `;
  }
}

customElements.define('translation-list', TranslationList);
