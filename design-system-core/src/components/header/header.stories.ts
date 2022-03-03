import { Meta, Story } from '@storybook/web-components'
import { html } from 'lit'
import './index'

export default {
    title: 'Components/DSHeader',
    argTypes: {
        opened: {
            name: 'Open Menu (mobile mode)',
            description: 'Only in mobile mode'
        }
    }
} as Meta

export const Header: Story = ({ opened }) => {
    return html`
        <style>
            .menu {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                list-style: none;
            }
            .menu li + li {
                margin-left: 0px;
            }
            .menu li a {
                text-decoration: none;
                color: #333;
            }
            .content {
                padding-top: 70px;
            }
            @media screen and (min-width: 768px) {
                .menu {
                    flex-direction: row;
                }
                .menu li + li {
                    margin-left: 10px;
                }
            }
        </style>

        <ds-header ?opened=${opened}>
            <ul class="menu">
                <li><a href="#">Item 01</a></li>
                <li><a href="#">Item 02</a></li>
                <li><a href="#">Item 03</a></li>
            </ul>
        </ds-header>

        <div class="content">
            <p>Content after header</p>
        </div>
    `
}
Header.args = {
    opened: false
}