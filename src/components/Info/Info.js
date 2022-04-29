import React from 'react'
import InfoPanel from '../InfoPanel/InfoPanel'

const Info = ({ data }) => {
  return (
    <div data-testid="info">
      <h2>Info</h2>
      <InfoPanel data={data} />
    </div>
  )
}

export default Info
