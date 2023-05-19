import { api } from "../../services/api";
import { Container } from "./styles"
import React, { useEffect } from "react";

export function TransactionsTable() {
    useEffect(() => {
        api.get("transactions")
            .then(response => console.log(response.data))
    }, []);


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/04/2023</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$500,00</td>
                        <td>Desenvolvimento</td>
                        <td>22/05/2023</td>
                    </tr>
                </tbody>
            </table>

        </Container>
    );
}