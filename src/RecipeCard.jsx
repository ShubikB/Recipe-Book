import "./App.css"

const RecipeCard = (props) => {
  return (
    <>
      <div className='recipeCard'>
        <img className='recipeImage' src={props.imageLocation} alt='food image' />
        <div className='recipeDescription'>
          <div className='recipeIntro'> {props.foodItem}</div>
          <div className='rescipeIngredients'>
            <ul>
              <li>item1</li>
              <li>item2</li>
              <li>item3</li>
              <li>item4</li>
            </ul>
            <div className='rescipeInstructions'>
              Follow these instructions to create a tasty delicious curry.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default RecipeCard
