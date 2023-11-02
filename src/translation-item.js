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
    this.addEventListener('mousedown', this.handleMouseDown.bind(this));
    this.addEventListener('mouseup', this.handleMouseUp.bind(this));
    this.addEventListener('touchstart', this.handleMouseDown.bind(this));
    this.addEventListener('touchend', this.handleMouseUp.bind(this));
  }

  static get properties() {
    return {
      entry: { type: Object },
      isBlurred: { type: Boolean },
    };
  }

  render() {
    return html`
      <li class="${this.highlighted ? 'highlighted' : ''}">
        <span>${this.entry.fr}</span>
        <span class="${this.isBlurred ? '' : 'unblur'} blurred translation">${
      this.entry.es
    }</span>
      </li>
    `;
  }

  handleMouseDown(event) {
    event.preventDefault();
    this.isBlurred = false; // Unblur on mouse down
    this.requestUpdate('isBlurred', true); // Manually trigger an update
  }

  handleMouseUp(event) {
    event.preventDefault();
    this.isBlurred = true; // Blur again on mouse up
    this.requestUpdate('isBlurred', false); // Manually trigger an update
  }
}

customElements.define('translation-item', TranslationItem);
