import React, { useState } from 'react'
import Component4 from './Component4'
import {UserContext} from './UserContext'

function Component1() {

const [user,setUser] = useState({
    id:101,
    name:"minhaz"
})

  return (
    <UserContext.Provider value={user}>
      <Component4 />
    </UserContext.Provider>
  )
}

export default Component1
