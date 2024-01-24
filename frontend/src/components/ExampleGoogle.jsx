
import React from 'react'

const ExampleGoogle = (userDetails) => {
const user = userDetails.userDetails
const logout = () => {
    window.open = `${process.env.REACT_APP_URL}/logout`
    "_self"
}

  return (
    <div>
    <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        </button></div>
  )
}

export default ExampleGoogle