import { Meta, Story } from '@storybook/web-components'
import { action } from "@storybook/addon-actions"
import { html } from 'lit'
import './index.ts';

export default {
    title: 'Components/DSTag',
    parameters: {
        docs: {
            source: {
                code: `
                    <ds-tag>Tag Highlight</ds-tag>
                `
            }
        }
      }
  } as Meta

export const Tag: Story = () => {

    return html `
        <ds-tag >
            Tag Highlight
        </ds-tag>
    `
}