import { IoLogoGooglePlaystore } from "react-icons/io5";
import "./GoogleButton.css"

export default function GoogleButton(){
    return <div className="google-button">
        <IoLogoGooglePlaystore size={30}/>
        <p>Google Play</p>
    </div>
}