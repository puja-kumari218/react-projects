import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Home Page</h1>
      <Link
        to='/user/123'
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
      >
        View User 
      </Link>
    </div>
  )
}

export default Home
