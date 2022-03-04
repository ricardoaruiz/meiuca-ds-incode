import { Meta, Story } from '@storybook/web-components'
import { html } from 'lit'

import './index'
import { DSTypographProps } from './types'

export default {
    title: 'Components/DSTypograph',
    argTypes: {
        component: {
            control: 'select',
            options: ['caption','heading','paragraph']
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'display']
        },
        variant: {
            control: 'select',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
        },
    },
    parameters: {
        docs: {
            source: {
                code: `
                    <ds-typograph component="heading" size="display" variant="h1"></ds-typograph>
                `
            }
        }
      }
} as Meta

export const Typograph: Story<DSTypographProps> = ({ component, size, variant }) => {
    return html`
        <style>
            ds-typograph::part(typograph) {
                color: red;
            }   
        </style>
        <ds-typograph
            component=${component}
            size=${size}
            variant=${variant}
        >
            Teste
        </ds-typograph>
    `
}
Typograph.args = {
    component: 'heading',
    size: 'display',
    variant: 'h1'
}