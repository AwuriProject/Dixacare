import AppButton from "./AppButton";
import GoogleButton from "./GoogleButton";
import "./GetStarted.css"

export default function GetStarted(){
    return (
       <div className="get-start">
            <div className="get-start-subsect">
                <div className="get-start-subsect-sec">
                    <h1 className="get-start-h1">Ready to get started</h1>
                    <h2 className="get-start-h2">Download the App to start exploring</h2>
                    <p className="get-start-p">Be a part of the healthcare revolution in African. Sign up for Dixacare today and experince the future of Telehealth. Together, we can overcome healthe challenges and build a healthier, more prosperous future for all.</p>
                    <div className="get-started-div">
                        <AppButton />
                        <GoogleButton/>
                    </div>
                </div>
                <div className="get-start-next">
                    <img src="images/mock-up-one.png" className="get-start-img"/>
                    <img src="images/mock-up-two.png" className="get-start-img"/>
                </div>
            </div>
       </div>
    )
}