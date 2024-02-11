import React, { useState } from 'react'
import PropTypes from 'prop-types'

function PropsType(props) {
    const [value,setvalue] = useState ()

  return (
    <div>
      <input type="text"  onChange={onchanHandeler} />
    </div>
  )
}

PropsType.propTypes = {

}

export default PropsType

