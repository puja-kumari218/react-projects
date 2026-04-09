import React from 'react'

function Card() {
  return (
    <div className="w-full max-w-sm mx-auto rounded-xl shadow-md overflow-hidden bg-white dark:bg-gray-800">
      <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600"
        alt="Nature"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Beautiful Nature
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
          Read More
        </button>
      </div>
    </div>
  )
}

export default Card
