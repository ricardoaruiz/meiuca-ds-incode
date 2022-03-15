import React from 'react'

import shapes from '@ricardoaruiz/design-assets/dist/assets/icons/shapes'
import '@ricardoaruiz/design-system-core/dist/components/icon'
import '@ricardoaruiz/design-system-core/dist/components/typograph'

import { CardContent } from '@ricardoaruiz/design-system-team'

import './styles.scss'

export const HomeCards = () => {
  return (
    <section>
      <div
        className="
          home-cards
          grid
          grid-cols-4
          md:grid-cols-12
      "
      >
        <ds-icon
          icon={shapes}
          size="lg"
          class="
            col-span-4
            row-start-1

            md:col-start-2
            md:col-span-10
          "
        ></ds-icon>

        <ds-typograph
          component="heading"
          class="row-start-2 col-span-4 md:col-start-2"
        >
          Alguns bons cards.
        </ds-typograph>

        <ds-typograph
          component="paragraph"
          class="row-start-3 col-span-4 md:col-start-2"
        >
          Esses são o que chamamos de Team Components.
        </ds-typograph>
      </div>

      <div className="home-cards__container">
        <div className="home-cards__container-card">
          <CardContent tag="Tag" title="Title" text="Text" />
        </div>
        <div className="home-cards__container-card">
          <CardContent tag="Tag" title="Title" text="Text" />
        </div>
        <div className="home-cards__container-card">
          <CardContent tag="Tag" title="Title" text="Text" />
        </div>
        <div className="home-cards__container-card">
          <CardContent tag="Tag" title="Title" text="Text" />
        </div>
      </div>
    </section>
  )
}
