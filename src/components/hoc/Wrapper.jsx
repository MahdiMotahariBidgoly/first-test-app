/** @format */
//session 47
const Wrapper = (Wrappedcomponent, className) => {
  return props => {
    return (
      <div className={className}>
        <Wrappedcomponent {...props} />
      </div>
    )
  }
}

export default Wrapper
