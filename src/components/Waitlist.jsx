import { HiArrowLongRight } from "react-icons/hi2";
import "./Waitlist.css"
export default function Waitlist(){
    return (
    <div className="wait-list">
        <HiArrowLongRight color="#166C20" size={30}/>
        <p>Join our <a>Waitlist</a></p>
    </div>
    )
}