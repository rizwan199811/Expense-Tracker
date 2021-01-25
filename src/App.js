import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import './App.css';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState'
function App() {
  return (
    <GlobalProvider>
     <Header></Header>
     <div className="container">
       <Balance></Balance>
       <IncomeExpense></IncomeExpense>
       <TransactionList></TransactionList>
       <AddTransaction></AddTransaction>
     </div>
    </GlobalProvider>
  );
}

export default App;
