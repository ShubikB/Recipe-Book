const Greetings = (props) => {
  return (
    <div className='greet-wrapper flex  justify-center item-center'>
      <h1 className=''>Hello! {props.userName}</h1>
      <h3>Find Best Recipe & Best food</h3>
    </div>
  )
}
export default Greetings
