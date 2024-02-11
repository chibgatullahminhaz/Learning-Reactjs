import { useEffect } from "react"
import React from 'react'

 
const Inde = () => {
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then (res => res.JSON)

    },[])
  return (
    <div>
      
    </div>
  )
}

 
export default Inde
