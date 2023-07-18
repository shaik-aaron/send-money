import React from "react";
import India from "../images/India.svg";
import UnitedKingdom from "../images/UnitedKingdom.svg";
import UnitedStatesOfAmerica from "../images/UnitedStatesofAmerica.svg";
import Antarctica from "../images/Antarctica.svg";
import Sweden from "../images/Sweden.svg";

function Currency({ country, value, currency }) {
    let countryImage;

    // Assign the appropriate image based on the country
    switch (country) {
        case "India":
            countryImage = India;
            break;
        case "UnitedKingdom":
            countryImage = UnitedKingdom;
            break;
        case "UnitedStatesOfAmerica":
            countryImage = UnitedStatesOfAmerica;
            break;
        case "Antartica":
            countryImage = Antarctica;
            break;
        case "Sweden":
            countryImage = Sweden;
            break;
        default:
            countryImage = null;
            break;
    }
    return (
        <div className="currency">
            {countryImage && (
                <img
                    className="country--image"
                    src={countryImage}
                    alt={country}
                />
            )}
            <p className="value">{value}</p>
            <p className="currency--name">{currency}</p>
        </div>
    );
}

export default Currency;
