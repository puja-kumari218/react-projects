import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
      <div className=' text-center mt-96'>
       <h1 className='text-cyan-600 text-5xl'>Welcome to My page</h1>
       <Link  className=" border border-amber-900 bg-amber-500" to = '/user/abc'> Go to user
       </Link>
      </div>
    </>
  )
}

export default Home
