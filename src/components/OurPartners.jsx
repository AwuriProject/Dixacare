import { BsPaypal } from "react-icons/bs";
import { FaGgCircle } from "react-icons/fa";
import "./OurPartners.css"

export default function OurPartners(){
    return (
    <div className="our-partners">
        <h1 className="our-partners-h1">Our Partners</h1>
        <p className="our-partners-p">We have partnered with market leading providers in the medical, Artificial Intelligence and Blockchain market to build a lasting solution.</p>
        <div className="our-partners-section">
            <div className="our-partners-image">
                <img src="images/near.png" className="our-partners-samore"/>
            </div>
            <div className="our-partners-image">
                <img src="images/samore.png" className="our-partners-samore"/>
            </div>
            <div className="our-partners-image">
                <img src="images/cent-bank.png" className="our-partners-samore"/>
            </div>
            <div className="our-partners-image">
                <BsPaypal />
                <p>BoundlessPay</p>
            </div>
            <div className="our-partners-image">
                <img src="images/aliance.png" className="our-partners-samore"/>
            </div>
            <div className="our-partners-image">
                <FaGgCircle />
                <p>Clinic Banc</p>
            </div>
            <div className="our-partners-image">
                <img src="images/burst.png" className="our-partners-samore"/>
            </div>
            <div className="our-partners-image">
                <img src="images/nimsa.png" alt="nimsa clinic" className="our-partners-img"/>
                <p>NIMSA</p>
            </div>
        </div>
    </div>
    )
}