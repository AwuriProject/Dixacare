import { TiTick } from "react-icons/ti";
import "./OurProcess.css"


export default function OurProcess(){
    return (
    <div className="our-process">
        <div className="our-process-subsect">
            <div className="our-process-data">
                <h1 className="our-process-h1">Our Process</h1>
                <div className="rectangle"></div>
            </div>
            <h2 className="our-process-h2">Simplified and comprehensive telemedicine health care for you.</h2>
            <div className="our-process-series">
                <TiTick size={40} color="#4CD471"/>
                <p className="our-process-p">Download App</p>
            </div>
            <div className="our-process-series">
                <TiTick size={40} color="#4CD471"/>
                <p className="our-process-p">Create Account</p>
            </div>
            <div className="our-process-series">
                <TiTick size={40} color="#4CD471"/>
                <p className="our-process-p">Find a doctor & book appointment</p>
            </div>
            <div className="our-process-series">
                <TiTick size={40} color="#4CD471"/>
                <p className="our-process-p">Instant payment (Fiat/crypto)</p>
            </div>
            <div className="our-process-series">
                <TiTick size={40} color="#4CD471"/>
                <p className="our-process-p">Enjoy your consultation</p>
            </div>
            <div className="our-process-series">
                <TiTick size={40} color="#4CD471"/>
                <p className="our-process-p">Access medical records</p>
            </div>
            <div className="our-process-series">
                <TiTick size={40} color="#4CD471"/>
                <p className="our-process-p">Earn DXC Tokens</p>
            </div>
        </div>
        <div>
            <img src="images/doc-img.png"  className="img-doc"/>
        </div>
    </div>
    )
}