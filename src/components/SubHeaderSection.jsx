import GoogleButton from "./GoogleButton"
import AppButton from "./AppButton"
import Waitlist from "./Waitlist"
import "./SubHeaderSection.css"
import PhoneImage from "./PhoneImage"

export default function SubHeaderSection(){
    return (
    <div className="subheader-section">
        <div className="Sect">
            <div className="header-message">
                <h1 className="header-h1">Welcome to Dixacare</h1>
                <p className="header-paragraph-one">Reforming Telehealth with Al and Blockchain</p>
                <p className="header-paragraph-two">Tokenization of wellness behaviour, addresssing financial constraints and incentivizing healthy living.
                </p>
            </div>
            <div className="buttons">
                <AppButton />
                <GoogleButton />
            </div>
            <div className="wait-class">
                <Waitlist/>
            </div>
        </div>
        <div>
                <PhoneImage />
        </div>
    </div>
    )
}