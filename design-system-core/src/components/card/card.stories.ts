import { Meta, Story } from '@storybook/web-components'
import { action } from "@storybook/addon-actions"
import { html } from 'lit'
import './index.ts';

export default {
    title: 'Components/DSCard',
    parameters: {
        docs: {
            source: {
                code: `
                    <ds-card @click="[handleClick]></ds-card>
                `
            }
        }
      }
  } as Meta

export const Card: Story = () => {

    const _handleClick = (event: CustomEvent) => {
        action('dsClick')(event)
    }

    return html `
        <div style="
            width: 315px;
            height: 320px;
        ">
            <ds-card @click=${_handleClick}>
                <h3>Card</h3>
                <p>Test</p>
            </ds-card>
        </div>
    `
}