import React from 'react'

import '@ricardoaruiz/design-system-core/dist/components/tag'
import '@ricardoaruiz/design-system-core/dist/components/typograph'
import Octagon from '../../components/Octagon'

import './styles.scss'

export const HomeBanner = () => {
  return (
    <>
      <div
        className="
        home-banner

        grid
        grid-cols-4
        gap-1
        px-2

        md:grid-cols-12
        md:gap-3
        md:px-3

        mt-32"
      >
        <div
          className="
          col-start-1
          col-span-4

          md:col-start-2
          md:col-span-5
        "
        >
          <ds-tag>Teste do DS</ds-tag>
        </div>

        <div
          className="
            col-start-1
            col-span-4

            md:col-start-2
            md:col-span-5
        "
        >
          <ds-typograph component="heading" size="display" variant="h1">
            Bora testar esse Design System?
          </ds-typograph>
        </div>

        <div
          className="
            col-start-1
            col-span-3

            md:col-start-2
            md:col-span-3
        "
        >
          <ds-typograph component="paragraph">
            Essa é uma landing page para simular a construção de um produto a
            partir de um DS, do curso Design System in Code.
          </ds-typograph>
        </div>
      </div>

      <div className="octagon-session">
        <div className="octogon-container">
          <Octagon />
        </div>
      </div>
    </>
  )
}
