import React from 'react'

function Memory({ roomData }) {
  return (
    <div className="min-h-screen bg-[--bg] text-[--text] p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Memory</h1>
        <p className="text-center text-gray-600 mb-6">
          Room: {roomData?.roomId} | Game: {roomData?.gameName}
        </p>
        {/* Game implementation will go here */}
      </div>
    </div>
  )
}

export default Memory

