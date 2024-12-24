
const Hero = () => {
  return (
    <div className='hero flex items-center justify-center'>
      <div className='welcomeSection container-md bg-white rounded-lg p-10 '>
        <h1 className='text-center text-lime-500 text-8xl font-bold p-2 mb-5'>Hunger Monster</h1>
        <div className='searchBar text-center'>
          <input
            className='text-center bg-lime-100 border-2 rounded-lg w-4/5 p-2'
            type='text'
            name='searchRecipe'
            id='searchBar'
            placeholder='Search Recipe...'
          />
        </div>
      </div>
    </div>
  )
}
export default Hero
