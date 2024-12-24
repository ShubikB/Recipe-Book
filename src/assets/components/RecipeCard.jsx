import { useState } from "react"
import RecipePopup from "./RecipePopup"

const RecipeCard = ({ recipe }) => {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <div className='recipeWrapper w-96 bg-white border border-gray-200 rounded-2xl shadow dark:bg-lime-500  m-3 p-4'>
        <img className='rounded-lg w-full h-52 object-cover' src={recipe.image} alt={recipe.name} />
        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {recipe.name}
          </h5>
          <button
            className='viewRecipe inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => setShowPopup(true)}
          >
            View Recipe
          </button>
        </div>
      </div>

      {/* Conditionally render the popup */}
      {showPopup && <RecipePopup recipe={recipe} onClose={() => setShowPopup(false)} />}
    </>
  )
}

export default RecipeCard
