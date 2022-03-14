import React from 'react'

import { ReactComponent as OctagonBG } from './octagon-bg.svg'
import { ReactComponent as OctagonMSG } from './octagon-msg.svg'
import { ReactComponent as OctagonTag } from './octagon-tag.svg'

import './styles.scss'

const Octagon = () => {
  return (
    <div className="octagon-brand">
      <OctagonBG className="octagon-brand__shape" />
      <OctagonMSG className="octagon-brand__msg" />
      <OctagonTag className="octagon-brand__tag" />
    </div>
  )
}

export default Octagon
