import React from 'react'

import '@ricardoaruiz/design-system-core/dist/components/card'
import '@ricardoaruiz/design-system-core/dist/components/typograph'
import '@ricardoaruiz/design-system-core/dist/components/tag'

import { CardContentProps } from './types'
import './styles.scss'

export const CardContent: React.VFC<CardContentProps> = ({ tag, title, text }) => {
  return (
    <ds-card class="card-content">
        <ds-tag>{tag}</ds-tag>

        <ds-typograph 
            component="heading" 
            size="lg" 
            variant="h3"
        >
            {title}
        </ds-typograph>

        <ds-typograph 
            component="paragraph"
        >
            {text}
        </ds-typograph>
    </ds-card>
  )
}