import { LitElement, html, css, unsafeCSS, property } from "lit-element";
import { classMap } from 'lit/directives/class-map.js';

import style from './style.scss'

export class DSSelect extends LitElement {

  static styles = css`
    ${unsafeCSS(style)}
  `

  @property({ type: String })
  id = ''

  @property({ type: String })
  name = ''

  @property({ type: String })
  label = ''

  @property({ type: String })
  placeholder = ''

  @property({ type: String })
  value = ''

  @property({ type: String })
  helperText = ''

  @property({ type: Boolean })
  required = false

  @property({ type: Boolean })
  disabled = false

  @property({ type: Boolean })
  error = false
  
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

  _handleChange(event: Event) {
    this.dispatchEvent(
      new CustomEvent(
        'dsChange', { 
          detail: { 
            value: (event.target as HTMLSelectElement).value 
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

if (!customElements.get('ds-select')) { customElements.define('ds-select', DSSelect); }