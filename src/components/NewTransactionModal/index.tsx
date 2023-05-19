import Modal from "react-modal";
import React from "react";


interface NewTrasactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose }: NewTrasactionModalProps) {
    return (
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
    >
        <h2>Cadastrar transação</h2>
    </Modal>
    );
}