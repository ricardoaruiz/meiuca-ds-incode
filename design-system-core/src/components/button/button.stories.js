import { html } from 'lit'
import './index.js';

export default {
  title: 'Components/DSButton',
};

export const Button = ({
    label,
    disabled,
    loading
}) => {

    return html`
        <ds-button
            ?disabled=${disabled}
            ?loading=${loading}
        >
            ${label}
        </ds-button>
    `
}

Button.args = {
    label: 'Button Primary',
    disabled: false,
    loading: false
}