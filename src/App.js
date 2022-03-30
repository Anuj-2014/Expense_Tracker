import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import "./App.css";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
      </div>
      <div className="container">
        <IncomeExpenses />
      </div>
      <div className="container">
        <TransactionList />
      </div>
      <div className="container">
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
