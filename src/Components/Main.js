import React from "react";
import Currency from "./Currency";
import Transaction from "./Transaction";
import currencies from "../data/currencies";
import transactions from "../data/transactions";

function Main() {
    return (
        <main>
            <p className="your--account">Your Account</p>
            <div id="currency--container">
                {currencies.map((currency) => {
                    return <Currency key={currency.id} {...currency} />;
                })}
            </div>
            <div id="transactions">
                <p className="transactions--text">Transactions</p>
                {transactions.map((transaction) => {
                    return (
                        <Transaction key={transaction.id} {...transaction} />
                    );
                })}
            </div>
        </main>
    );
}

export default Main;
