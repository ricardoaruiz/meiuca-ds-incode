import { html } from 'lit'
import './index.js';

export default {
  title: 'Components/DSSelect',
};

export const Select = ({
    name,
    label,
    value,
    helperText,
    placeholder,
    required,
    disabled,
    error
}) => {

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