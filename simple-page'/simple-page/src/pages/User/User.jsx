import React from 'react'
import {useParams} from "react-router-dom"

function User() {
  const {userid} = useParams();
  return (
    <div>
      <h1 className='text-3xl'>User page</h1>
      <h2>User Id {userid}</h2>
    </div>
  )
}

export default User
