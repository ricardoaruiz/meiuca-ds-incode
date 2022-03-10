import { Story, Meta } from '@storybook/react'
import { CardContentProps } from './types'
import { CardContent } from './index'

export default {
    title: 'Team Lib/Card Content',
    parameters: {
        docs: {
            source: {
                code: `
                    <CardContent tag="Tag" title="Title" text="Text" />
                `
            }
        }
      }
} as Meta

export const Default: Story<CardContentProps> = (args) => {
    return (
        <div style={{
            width: '312px',
            height: '370px'
        }}>
            <CardContent { ...args} />
        </div>
    )
}

Default.args = {
    tag: 'Tag Highlight',
    title: 'Heading',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
}