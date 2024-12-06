import { useState } from "react"
import "./App.css"
import RecipePopup from "./RecipePopup"

const RecipeCard = ({ name, image }) => {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <div className='recipeWrapper w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 p-4'>
        <img className='rounded-lg w-full h-52 object-cover' src={image} alt='' />
        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {name}
          </h5>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Tasty, Authentic</p>
          <button
            className='viewRecipe inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => setShowPopup(true)}
          >
            View Recipe
          </button>
        </div>
      </div>

      {/* Conditionally render the popup */}
      {showPopup && <RecipePopup onClose={() => setShowPopup(false)} />}
    </>
  )
}

export default RecipeCard
