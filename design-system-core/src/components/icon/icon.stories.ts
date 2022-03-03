import { Meta, Story } from '@storybook/web-components'
import { html } from 'lit-html'

import options from '@ricardoaruiz/design-assets/dist/assets/icons/exported-assets-list'
import * as icons from '@ricardoaruiz/design-assets/dist/assets/icons';
import shapes from '@ricardoaruiz/design-assets/dist/assets/icons/shapes'

import './index'

export default {
    title: 'Components/DSIcon',
    argTypes: {
        size: {
            name: 'Size',
            description: 'Define o tamanho do ícone',
            control: 'select',
            options: ['sm', 'md', 'lg']
        },
        icon: {
            name: 'Icon',
            description: 'Define o ícone que será usadp',
            control: 'select',
            options: options
        }
    },
    parameters: {
        docs: {
            source: {
                code: `
                    import shapes from '@ricardoaruiz/design-assets/dist/assets/icons/shapes'                    
                    ...
                    <ds-icon size="md" icon="shapes"></ds-icon>
                `
            }
        }
      }
} as Meta

export const Icon: Story = ({
    size,
    icon
}) => {
    return html`
        <ds-icon .size="${size}" .icon="${icons[icon]}"></ds-icon>
        <!-- <ds-icon .size="${size}" .icon="${shapes}"></ds-icon> -->
    `
}

Icon.args = {
    size: 'lg',
    icon: 'Shapes'
}
