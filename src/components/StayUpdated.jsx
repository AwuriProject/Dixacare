import { FaEnvelope } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import "./StayUpdated.css"


export default function StayUpdated(){
    return (
    <div className="stay-update">
        <h1 className="stay-update-h1">Stay updated</h1>
        <p className="stay-update-p">Subscribe to our newsletter to get feeds, offers and promos.</p>
        <div className="stay-update-next">
            <div className="stay-update-subsect">
                <FaEnvelope size={24} color="#858585"/>
                <p className="stay-update-s-p">Enter your email
                </p>
            </div>
            <button className="stay-update-btn">
                Send
                <IoSend size={24} />
            </button>
        </div>
    </div>
    )
}