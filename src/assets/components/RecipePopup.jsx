const RecipePopup = ({ recipe, onClose }) => {
  return (
    <div className='popupWrapperTransparent fixed inset-0 bg-black bg-opacity-50 flex items-center overflow-y-auto justify-center z-50'>
      <div className=' container-md bg-white p-7 rounded-lg  '>
        <img
          className='rounded-lg w-full h-72 object-cover mb-4'
          src={recipe.image}
          alt={recipe.name}
        />
        <h2 className='text-2xl font-bold mb-4'>{recipe.name}</h2>
        <p className='mb-4'>
          <strong>Time to Cook:</strong> {recipe.timeToCook}
        </p>
        <h3 className='text-lg font-semibold'>Ingredients:</h3>
        <ul className='list-disc list-inside mb-4'>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3 className='text-lg font-semibold'>Steps:</h3>
        <ol className='list-decimal list-inside mb-4'>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
        <button
          className='viewRecipe inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default RecipePopup
