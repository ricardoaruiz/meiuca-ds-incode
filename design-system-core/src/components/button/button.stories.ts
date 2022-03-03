import { Meta, Story } from '@storybook/web-components'
import { html } from 'lit'
import './index.ts';

export default {
  title: 'Components/DSButton',
} as Meta

export const Button: Story = ({
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