import React from 'react'

function Contact() {
  return (
    <div className="max-w-md mx-auto mt-16 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col gap-4">
        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-medium text-gray-800">puja@example.com</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">GitHub</p>
          <p className="font-medium text-gray-800">github.com/puja-kumari218</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
