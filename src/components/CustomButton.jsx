
const CustomButton = ({onClick, text}) => {
  return (
    <div onClick={onClick}>
      {text}
    </div>
  )
}

export default CustomButton;