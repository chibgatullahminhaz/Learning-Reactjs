import React, { useState } from 'react'
import About from './Component/React_Routing/Web/pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoutingApp from './Component/React_Routing/Web/pages/RoutingApp'
import axios from 'react-axios'

function App() {
const [users,setuser] = useState([]);
console.log(users)
const getAll =async()=>{
const response = await axios.Get("http://localhost:3000/users")

console.log(response)
setuser(response.name)
}

React.useEffect(()=>{
  getAll()
},[])

  return (
<>
<div>
  {users.name}
</div>
<h1> {users.map((user)=>{
  return (
    <article key={user.id}>
      {user.name}
    </article>
  )
})} </h1>
</>
  )
}

export default App
