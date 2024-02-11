import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'
function Component4() {
    const user = useContext(UserContext)
    console.log(user)
  return (
    <div>
      <h1>{user.id}</h1>
      <h2>{user.name}</h2>
    </div>
  )
}

export default Component4
