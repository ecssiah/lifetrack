import React from 'react'

const Focus = ({ match }) => (
  <div>
    {match.params.focusId}
  </div>
)

export default Focus

