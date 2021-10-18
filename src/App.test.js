import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App, { calcularNovoSaldo } from "./App";

describe("Componente principal", () => {
  describe("Quando eu abro o App do banco", () => {
    test(" Exibir o nome", () => {
      render(<App />);

      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });

    it(" Mostrar saldo", () => {
      render(<App />);

      expect(screen.getByText("Saldo:")).toBeInTheDocument();
    });

    it(" O botão de realizar transação", () => {
      render(<App />);
      expect(screen.getByText("Realizar operação")).toBeInTheDocument();
    });
  });

  describe("Quando eu realizo um transação", () => {
    it("que é um saque, o valor vai diminuir", () => {
      const valores = {
        tran: "saque",
        valor: 50,
      };

      const novoSaldo = calcularNovoSaldo(valores, 150);
      expect(novoSaldo).toBe(100);
    });
    it("que é um saque, a transação deve ser realizada", () => {
      const { getByText, getByTextId, getByLabelText } = render(<App />);
      const saldo = screen.getByText('R$ 1000');
      const transacao = screen.getByLabelText('Saque');
      const valor = screen.getByTextId('valor');
      const botaoTransacao = screen.getByText('Realizar operação');

      expect(saldo.textContent).toBe('R$ 1000')
      
      fireEvent.click(transacao, {target: {value:'saque'}})
      fireEvent.change(valor, {target: {value: 10 }})
      fireEvent.click(botaoTransacao)
      expect(saldo.textContent).toBe('R$ 990');
    });
  });
});
