import "./PhoneImage.css"

export default function PhoneImage(){
    return (
    <div className="set-images">
        <div className="mobile-phone">
            <img src="images/phone-image.png" alt="mobile phone" className="phone-logo-one"/>
            <img src="images/mock2.png" alt="mobile phone" className="phone-logo-two"/>
            <img src="images/Mockup.png" alt="mobile phone" className="phone-logo-three"/>
        </div>
        <div className="heart">
            <img src="images/Heart.png" alt="heart"/>
        </div>
        <div className="symbol">
            <img src="images/Symbol.png" alt="symbol"/>
        </div>
        <div className="coin">
            <img src="images/coin.png" alt="coin"/>
        </div>
        <div className="wallet"> 
            <img src="images/wallet.png" alt="wallet"/>
        </div> 
    </div>
    )
}