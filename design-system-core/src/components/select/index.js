import { LitElement, html, css, unsafeCSS } from 'lit'
import { classMap } from 'lit/directives/class-map.js';

import style from './style.scss'

export default class DSSelect extends LitElement {

  static styles = css`
    ${unsafeCSS(style)}
  `

  static properties = {
    id: { type: String },
    name : { type: String },
    label: { type: String },
    placeholder: { type: String },
    value: { type: String },
    helperText: { type: String },
    required: { type: Boolean },
    disabled: { type: Boolean },
    error: { type: Boolean }
  };

  constructor() {
    super()
    this.id = ''
    this.name  = ''
    this.label = ''
    this.placeholder = ''
    this.value = ''
    this.helperText = ''
    this.required = false
    this.disabled = false
    this.error = false
  }

  get selectContainer() {
    return this.shadowRoot.querySelector('.select')
  }

  firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot')
    const select = this.shadowRoot.querySelector('select')

    slot.assignedNodes()
      .filter(node => node.nodeName === 'OPTION')
      .forEach(node => {
        select.appendChild(node)
      })
  }

  _handleChange(event) {
    this.dispatchEvent(
      new CustomEvent(
        'dsChange', { 
          detail: { 
            value: event.target.value 
          }, 
          bubbles: true, 
          composed: true 
      }
    ))
  }

  _handleFocus() {
    this.selectContainer.classList.add('select--focus')
    this.dispatchEvent(new CustomEvent('dsFocus', {
      bubbles: true,
      composed: true
    }))
  }

  _handleBlur() {
    this.selectContainer.classList.remove('select--focus')
    this.dispatchEvent(new CustomEvent('dsBlur', {
      bubbles: true,
      composed: true
    }))
  }

  _showHelperText() {
    return this.helperText ? html`
      <span 
        class="select__helper-text"
      >
        ${this.helperText}
      </span>
    ` : ''
  }

  render() {
    return html`
      <div class="${classMap({
            'select': true,
            'select--error': this.error,
            'select--disabled': this.disabled,
            'select--required': this.required
          })
        }"
      >
        <label for=${this.id} >${this.label}</label>

        <select
          id=${this.id}
          .name=${this.name}
          .value=${this.value}
          ?required=${this.required}
          ?disabled=${this.disabled}
          @input=${this._handleChange}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
        >
          <option 
            value="" 
            class="select__placeholder-text" 
            disabled 
            selected 
            hidden
          >
            ${this.placeholder}
          </option>
        </select>
        
        ${this._showHelperText()}
      </div>

      <slot></slot>
    `
  }
}

!customElements.get('ds-select') && customElements.define('ds-select', DSSelect)