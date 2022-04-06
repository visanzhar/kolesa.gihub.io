import React from "react";
import pic1 from "./img/visa.png"
import pic2 from "./img/symbol.png"
import pic3 from "./img/o2.png"
import pic4 from "./img/park (1).png"
import pic5 from "./img/mastercard.png"
const Trending = () => {
    return(
        <div className="Trending-content">
            <h2>Горячие предложения по продаже авто в Казахстане</h2>
            <div className="photo-gallery">
                <img src={pic1} alt="car"></img>
                <img src={pic2} alt="car"></img>
                <img src={pic3} alt="car"></img>
                <img src={pic4} alt="car"></img>
                <img src={pic5} alt="car"></img>
            </div>
        
        </div>
    );
}

export default Trending;
