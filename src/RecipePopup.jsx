import HasbullaGif from "./HasbullaGif.jsx"

const RecipePopup = ({ onClose }) => {
  return (
    <div className=' popupWrapperTransparent fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" '>
      <div className='bg-white p-5 rounded-lg w-[400px] text-center '>
        <HasbullaGif />

        <h2>Recipe Details</h2>
        <p>Here is the recipe information...</p>
        <button
          className='viewRecipe inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
          onClick={onClose}
        >
          close
        </button>
      </div>
    </div>
  )
}

export default RecipePopup
