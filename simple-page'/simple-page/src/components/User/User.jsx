import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userid } = useParams()

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm px-10 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">User Profile</h1>
        <div className="bg-blue-50 text-blue-700 font-mono text-xl px-6 py-3 rounded-lg">
          ID: {userid}
        </div>
      </div>
    </div>
  )
}

export default User
