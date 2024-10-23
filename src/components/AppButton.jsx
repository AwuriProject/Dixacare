import { FaApple } from "react-icons/fa";
import "./AppButton.css"

const AppButton = () => {
  return (
    <div className="app-button">
      <FaApple size={30} className="icon"/>
      <p>App Store</p>
    </div>
  )
}

export default AppButton
