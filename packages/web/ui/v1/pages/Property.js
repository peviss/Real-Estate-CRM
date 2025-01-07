import React from 'react'
import { useState, useEffect } from 'react'
import Details from '../components/Details/Details'

const Property = (props) => {

  return (
    <div>
      <Details {...props} />
    </div>
  )
}

export default Property
