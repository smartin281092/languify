import { LitElement, html, css } from 'lit';

class TranslationItem extends LitElement {
  static styles = css`
    li {
      display : flex;
      flex-direction : column;
      padding: 20px 20px;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(33,53,71,0.1);
      width: 100%;
      font-size: 21px;
      font-weight: 400;
      font-family: 'Barlow', sans-serif;
      cursor: pointer;
    }

    span {
      transition: all 0.2s ease-out;
    }

    .unblur {
      filter: blur(0px) !important;
    }

    .blurred {
      filter: blur(10px);
    }

    .translation {
      font-weight: 500;
      filter: blur(10px);
    }

    li:hover .translation {
      filter: blur(0px);
    }

    .highlighted {
      background-color: #E9F3F4;
    }
  `;

  constructor() {
    super();
    this.entry = {};
    this.highlighted = false;
    this.isBlurred = true;
  }

  static get properties() {
    return {
      entry: { type: Object },
      isBlurred: { type: Boolean },
    };
  }

  render() {
    return html`
      <li class="${this.highlighted == true ? 'highlighted' : ''}">
        <span>${this.entry.fr}</span>
        <span class="translation">${
      this.entry.es
    }</span>
      </li>
    `;
  }

}

customElements.define('translation-item', TranslationItem);
