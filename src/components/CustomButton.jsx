
const CustomButton = ({onClick, text}) => {
  return (
    <button 
      className="button" 
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default CustomButton;