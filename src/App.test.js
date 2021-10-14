import React from "react";
import { render, screen } from "@testing-library/react";
import App, {calcularNovoSaldo} from "./App";

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

  describe('Quando eu realizo um transação' , ()=>{
      it('que é um saque, o valor vai diminuir', ()=>{
        
        const valores = {
            tran: 'saque',
            valor: 50
        }
        
        const novoSaldo = calcularNovoSaldo(valores, 150)
        expect(novoSaldo).toBe(100);     
    })
  })
});
