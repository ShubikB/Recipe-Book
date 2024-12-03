import "./App.css"
import RecipeCard from "./RecipeCard.jsx"
import Greetings from "./greetings.jsx"

const App = () => {
  console.log("Check js")

  return (
    <>
      <Greetings userName='Shubik' />
      <div className='flex flex-wrap'>
        <RecipeCard foodItem='Chicken Curry' imageLocation='../ChickenCurry.jpeg' />
        <RecipeCard foodItem='Pasta' imageLocation='../pasta.jpg' />
        <RecipeCard foodItem='Pizza' imageLocation='../pizza.jpg' />
        <RecipeCard foodItem='Pasta' imageLocation='../pasta.jpg' />
        <RecipeCard foodItem='Pasta' imageLocation='../pasta.jpg' />
      </div>
    </>
  )
}

export default App
