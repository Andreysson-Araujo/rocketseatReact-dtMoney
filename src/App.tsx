import Modal from "react-modal"
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import React, { useState } from 'react';
import {GlobaStyle} from "./styles/global"
import { TransactionsProvider } from "./hooks/useTransactions"; 
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root")

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionsProvider>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
     <Dashboard />
     <NewTransactionModal 
      isOpen = {isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />
     <GlobaStyle/>
    </TransactionsProvider>
  );
}

