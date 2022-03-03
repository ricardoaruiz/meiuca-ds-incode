import { Meta, Story } from '@storybook/web-components'
import { html } from 'lit'
import { action } from "@storybook/addon-actions"
import './index.ts';

export default {
  title: 'Components/DSSelect',
} as Meta

export const Select: Story = ({
    name,
    label,
    value,
    helperText,
    placeholder,
    required,
    disabled,
    error
}) => {

    const _handleChange = (event) => {
        action('dsChange')(event.detail)
    }

    const _handleFocus = (event) => {
        action('dsFocus')(event)
    }

    const _handleBlur = (event) => {
        action('dsBlur')(event)
    }

    return html`
        <ds-select
            id="my-select"
            .name=${name}
            .label=${label}
            .value=${value}
            .helperText=${helperText}
            placeholder=${placeholder}
            ?disabled=${disabled}
            ?required=${required}
            ?error=${error}
            @dsChange=${_handleChange}
            @dsFocus=${_handleFocus}
            @dsBlur=${_handleBlur}
        >
            <option value="1">Item 01</option>
            <option value="2">Item 02</option>
            <option value="3">Item 03</option>
        </ds-select>
    `
}

Select.args = {
    name: 'mySelect',
    label: 'My label',
    value: '',
    helperText: 'Helper Text',
    placeholder: 'Select Default',
    required: false,
    disabled: false,
    error: false
}