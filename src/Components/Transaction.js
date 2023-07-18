import React from "react";
import arrowUP from "../images/arrow-up.svg";
import arrowDown from "../images/arrow-down.svg";
import exclaim from "../images/exclaim.svg";

function Transaction({ type, name, date, amount }) {
    let arrow_type;

    if (type === "Sent") {
        arrow_type = arrowUP;
    } else if (type === "Received") {
        arrow_type = arrowDown;
    } else if (type === "Failed to send") {
        arrow_type = exclaim;
    }

    return (
        <div className="transaction">
            <div className="group-1">
                <div
                    className={
                        type === "Failed to send"
                            ? "arrow--div--error"
                            : "arrow--div"
                    }
                >
                    <img src={arrow_type} />
                </div>
                <div className="group-2">
                    <p className="account--name">{name}</p>
                    <div className="details">
                        <p className="type">{type}</p>
                        <div id="rectangle"></div>
                        <p className="type">{date}</p>
                    </div>
                </div>
            </div>
            <p className="amount">{amount}</p>
        </div>
    );
}

export default Transaction;
